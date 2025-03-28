import gspread
from google.oauth2.service_account import Credentials

# Define the scope
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# Authenticate using the service account JSON file
SERVICE_ACCOUNT_FILE = 'path/to/your/service_account.json'
credentials = Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES)

# Connect to Google Sheets
client = gspread.authorize(credentials)

# Open the Google Sheet by name
sheet = client.open("Your Google Sheet Name").sheet1

# Fetch all data from the sheet
data = sheet.get_all_records()

# Print the data
print(data)