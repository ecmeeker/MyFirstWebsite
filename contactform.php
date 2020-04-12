<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contact Emily Cassandra</title>
	<!--<link rel="stylesheet" href="altstylePhone.css">
	<link rel="stylesheet" href="altstyleTab.css">
	<link rel="stylesheet" href="altstyle.css">-->
        <link rel="stylesheet" href="contact.css">
        <!--<script type="text/javascript" onload="">
            window.onload = alert(window.innerWidth);
        </script>-->
</head>
<body>
	<header data-role="header">
            <h1><img id="logoLarge" src="Media/Logo/ecmLogoPower.png" alt="Emily Cassandra Meeker" /></h1>
            <h1>Email Emily Cassandra</h1>
        </header>
        <div class="main" data-role="main">

<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $firstTime = true;
    if(isset($_POST["submit"])){
        $firstTime = false;
        $error = "";
        if(!$name){
            $error .= "<p class='alert'>Please enter your name</p>";
        }
        if(!$email){
            $error .= "<p class='alert'>Please enter your email address</p>";
        }
        if(!$subject){
            $error .= "<p class='alert'>Please enter a subject for your email</p>";
        }
        if(!$message){
            $error .= "<p class='alert'>Please enter a message</p>";
        }
        if(!$email != "" AND !filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error .= "<p class='alert'>Please enter a valid email address</p>";
        }

        if($error){
            $result = '<div class="alert"><strong>Please correct the form in order to send your email:</strong> ' .$error. '</div>';
        }else{
            $to = "emilycassandra@emilycassandra.com";
            $subject = $subject;
            $content = "From: ".$name."\r\n";
            $content .= "Message: ".$message;
            $header = "From: " .$email ."\r\n";
            $header .= "Reply-To: " .$email."\r\n";
            if($_POST['cc']){
                $header .= "CC: " .$email ."\r\n";
            }
            if(mail($to, $subject, $content, $header)){
                $result = '<div class="success"><strong>Thanks for the message!</strong></div>';
            }else{
                $result = '<div class="alert"><strong>There was an error sending your message. Please try again or email me directly at emilycassandra@emilycassandra.com</strong></div>';
            }
        }
        echo $result;
   }else{
?>
            <p>I'd love to hear from you! Fill out the form and I'll respond ASAP!!</p>
<?php
   }
   if($firstTime || $error){
?>
            <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <div class="formrow">
                    <label for="name">Your Name:</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" value="<?php echo $_POST['name']; ?>" /><br />
                </div>
                <div class="formrow">
                    <label for="email">Your Email:</label>
                    <input type="email" name="email" id="email" placeholder="Your Email" value="<?php echo $_POST['email']; ?>" /><br />
                </div>
                <div class="formrow">
                    <label for="cc">CC Yourself?</label>
                    <input type="checkbox" name="cc" id="cc" /><br />
                </div>
                <div class="formrow">
                    <label for="subject">Email Subject:</label>
                    <input type="text" name="subject" id="subject" placeholder="Please enter a subject" value="<?php echo $_POST['subject']; ?>" /><br />
                </div>
                <div class="formrow">
                    <label for="message" id="textArea">Message:</label>
                    <textarea name="message" id="message" placeholder="Type message here"><?php echo $_POST['message']; ?></textarea><br />
                </div>
                <div class="submit">
                    <input type="submit" name="submit" value="Send" /><br />
                </div>
            </form>
<?php
   }
?>
            <p class="description">Email powered by HTML, CSS, and PHP by Emily Cassandra Meeker</p>

        </div>
	<div id="homelink">
            <a href="index.html" >Back Home</a>
	</div>
	<footer data-role="footer">
            <p>Copyright &copy; 2020 Emily Cassandra Meeker</p>
	</footer>
</body>
</html>
