# BANK OF FLATIRON
This is a mini web app built using React to display a list of bank transactions. The app consists of two main components: TransactionForm and Transaction.

## Features
The app consists of three main components: App, Transaction, and TransactionForm.

# Transaction Component
The Transaction component fetches transaction data from the JSON DB server and displays it in a table. It also includes a search bar that allows you to filter transactions by description.

# TransactionForm Component
The TransactionForm component allows you to add new transactions through a form. It includes fields for entering the date, description, and amount of the transaction. When you submit the form, the new transaction is added to the table displayed in the Transaction component. Note that the new transaction is not persisted to the backend.

# App Component
The App component is the entry point of the app and includes the Transaction and TransactionForm components. It also displays the title of the app.



# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgements
This project was created as part of a learning exercise to practice React concepts including components, props, state, events, and data fetching.