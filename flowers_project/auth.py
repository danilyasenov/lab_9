from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from db import get_connection

router = APIRouter()

class CustomerAuth(BaseModel):
    login: str
    password: str

@router.post("/login")
def login_customer(user: CustomerAuth):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id_customer, first_name, last_name 
        FROM customer 
        WHERE login_ = ? AND passwrd = ?
    """, (user.login, user.password))
    
    row = cursor.fetchone()
    if row:
        return {
            "message": "Login successful",
            "customer_id": row[0],
            "name": f"{row[1]} {row[2]}"
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")
