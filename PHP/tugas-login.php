<?php

$username = '';
$password = '';
$message = '';
$isSuccess = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if (empty($username) || empty($password)) {
        $message = "Username dan password harus diisi!";
    } elseif ($username === "admin" && $password === "12345") {
        $message = "Login berhasil!";
        $isSuccess = true;
    } else {
        $message = "Username atau password salah!";
    }
}

?>

<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tugas Login</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100 min-h-screen flex items-center justify-center">

    <div class="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h1 class="text-3xl font-bold text-center mb-6">Login</h1>

        <?php if ($message): ?>
            <p class="<?= $isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700' ?> px-4 py-2 rounded mb-4 text-sm">
                <?= htmlspecialchars($message) ?>
            </p>
        <?php endif; ?>

        <form method="POST">

            <div class="mb-4">
                <label class="block text-sm font-medium mb-1">Username</label>
                <input
                    type="text"
                    name="username"
                    value="<?= htmlspecialchars($username) ?>"
                    class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan username">
            </div>

            <div class="mb-4">
                <label class="block text-sm font-medium mb-1">Password</label>
                <input
                    type="password"
                    name="password"
                    class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan password">
            </div>

            <div class="mb-4 flex items-center">
                <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    class="mr-2">
                <label for="remember" class="text-sm">
                    Remember Me
                </label>
            </div>

            <button
                type="submit"
                class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Login
            </button>

        </form>
    </div>

</body>

</html>