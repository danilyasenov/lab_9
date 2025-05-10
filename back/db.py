import pyodbc

def get_connection():
    return pyodbc.connect(
        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=TSI-L2-24;"
        "DATABASE=YD_V1_db;"
        "UID=sa;"
        "PWD=root_123;"  
    )
