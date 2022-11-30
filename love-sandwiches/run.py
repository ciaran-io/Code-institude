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
    sales_data = data_str.split(",")
    validate_data(sales_data)


def validate_data(values):
    """Validates user input.

    Loop through values and convert to type int.
    Validate entered input is length of 6.
    Raise error if incorrect
    """
    try:
        [int(value) for value in values]
        if len(values) != 6:
            raise ValueError(
                f"Please enter exactly 6 values, you provided {len(values)}"
            )
    except ValueError as error:
        print(f"Invalid data: {error}, please try again.\n")


get_sales_data()
