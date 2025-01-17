<?php require("register.class.php") ?>
<?php
	if(isset($_POST['submit'])){
		$user = new RegisterUser($_POST['username'], $_POST['email'], $_POST['password']);
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	 <link rel="stylesheet" href="style.css">
	<title>Register form</title>
	<link rel="icon" href="../../images/logo2.png">
</head>
<body>
	<div class="form-container">
		<!-- Logo -->
    <a href="../../index.html"><img src="../../images/logo2.png" alt="Logo" class="logo"></a>

		<form action="" method="post" enctype="multipart/form-data" autocomplete="off">
			<h2>Kayıt Ol</h2>
			<input type="text" name="username" placeholder="Kullanıcı Adı">

			<input type="email" name="email" placeholder="E-Posta">

			<input type="password" name="password" placeholder="Şifre">

			<button type="submit" name="submit">Kayıt Ol</button>

			<div>Zaten bir hesabın var mı? <a href="login.php">Giriş Yap</a></div>
			<p class="error"><?php echo @$user->error ?></p>
			<p class="success"><?php echo @$user->success ?></p>
		</form>
	</div>
</body>
</html>