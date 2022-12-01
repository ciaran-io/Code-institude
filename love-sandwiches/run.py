import gspread
from google.oauth2.service_account import Credentials
from pprint import pprint

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


def get_last_5_entries_sales():
    """
    Return last entry sales from each column
    in sales worksheet
    """
    sales = SHEET.worksheet("sales")
    columns = []
    for ind in range(1, 7):  # sandwich sales category length
        column = sales.col_values(ind)
        columns.append(column[-5:])  # slice last five in list
    return columns


def get_sales_data():
    """Get sales figures input from user.

    Run program until user inputs correct data.

    Returns
    -------
    list
        List of user input data
    """
    while True:
        print("Enter sales data from previous market")
        print("Data should be 6 numbers separated by commas")
        print("Example: 10,20,30,40,50,60\n")

        data_str = input("Enter your data here: ")
        sales_data = data_str.split(",")

        if validate_data(sales_data):
            print("Data is valid!")
            break
    return sales_data


def validate_data(values: list):
    """Validates user input.

    Loop through values and convert to type int.\n
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
        return False

    return True


def update_worksheet(data: list, worksheet: str):
    """Update worksheet

    Receives a list of integers to be inserted into a worksheet.\n
    Updates the relevant worksheet with the data provided
    """

    print(f"Updating {worksheet} work sheet...\n")
    worksheet_to_update = SHEET.worksheet(worksheet)
    worksheet_to_update.append_row(data)
    print(f"{worksheet} worksheet updated successfully.\n")


def calculate_surplus_data(sales_row: list):
    """Compare sales with stock and calculate the surplus for each item type.

    The surplus is defined as the sales figure subtracted from the stock:
        - Positive values indicates waste.
        - Negative values indicates extras made when stock sold out.
    """
    print("Calculating surplus data...\n")
    stock = SHEET.worksheet("stock").get_all_values()
    stock_row = stock[-1]

    surplus_data = []
    for stock, sales in zip(stock_row, sales_row):
        surplus = int(stock) - sales
        surplus_data.append(surplus)

    return surplus_data


def main():
    """
    Run all program functions
    """
    data = get_sales_data()
    sales_data = [int(num) for num in data]
    update_worksheet(sales_data, "sales")
    new_surplus_data = calculate_surplus_data(sales_data)
    update_worksheet(new_surplus_data, "surplus")


print("Welcome to Love Sandwiches Data Automation")
# main()
sales_columns = get_last_5_entries_sales()
