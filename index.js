<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Registration Form</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        th,
        td {
            border: 1px solid black;
            padding: 8px;
            text-align: left
        }

        .submit-button {
            background-color: green;
            color: white;
        }

        th {
            background-color: aliceblue;
        }

        .table-heading {
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <h1>Registration Form</h1>

    <form id="registrationForm">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" required><br><br>

        <input type="checkbox" id="acceptTerms" name="acceptTerms" required>
        <label for="acceptTerms">Accept Terms & Conditions</label><br><br>

        <button type="submit" class="submit-button">Submit</button>
    </form>
    <button class="clear-button" id="clearButton">Clear Table</button>
    <div class="table-heading" colspan="5">ENTRIES</div>
    <table id="dataTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Dob</th>
                <th>Accepted Terms?</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script src="index.js"></script>

</body>

</html>
