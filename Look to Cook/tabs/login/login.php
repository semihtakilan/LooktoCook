<?php require("login.class.php") ?>
<?php 
	if(isset($_POST['submit'])){
		$user = new LoginUser($_POST['username'], $_POST['password']);
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	 <link rel="stylesheet" href="style.css">
	<title>Log in form</title>
	<link rel="icon" href="../../images/logo2.png">
</head>
<body>
<div class="form-container">
		<!-- Logo -->
    <a href="../../index.html"><img src="../../images/logo2.png" alt="Logo" class="logo"></a>

		<form action="" method="post" enctype="multipart/form-data" autocomplete="off">
			<h2>Giriş Yap</h2>

			<input type="text" name="username" placeholder="Kullanıcı Adı">

			<input type="password" name="password" placeholder="Şifre">

			<button type="submit" name="submit">Giriş Yap</button>

			<div>Henüz bir hesabın yok mu? <a href="register.php">Kayıt ol</a></div>
			<p class="error"><?php echo @$user->error ?></p>
			<p class="success"><?php echo @$user->success ?></p>
		</form>
	</div>
</body>
</html>