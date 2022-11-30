import gspread
from google.oauth2.service_account import Credentials

# List of scopes for the API can access
SCOPE = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/drive",
]

# File name of the credentials
CREDS = Credentials.from_service_account_file("creds.json")
# Create a copy of the credentials with the specified scopes
SCOPE_CREDS = CREDS.with_scopes(SCOPE)
# Authorize the client sheet
GSPREAD_CLIENT = gspread.authorize(SCOPE_CREDS)
# Get the instance of the Spreadsheet
SHEET = GSPREAD_CLIENT.open("love_sandwiches")

# Access the specific sheet
sales = SHEET.worksheet("sales")

data = sales.get_all_values()


def get_sales_data():
    """
    Get sales figures input from user
    """
    print("Enter sales data from previous market")
    print("Data should be 6 numbers separated by commas")
    print("Example: 10,20,30,40,50,60\n")

    data_str = input("Enter your data here: ")
    print(f"The data provided is {data_str}")


get_sales_data()
