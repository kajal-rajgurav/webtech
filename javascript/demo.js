<!DOCTYPE html>
<html>
<body>
<h1>JavaScript if</h1>

<p>Display "Good day!" if the hour is less than 18:00:</p>

<p id="demo">Good Evening!</p>
<p class="dummy"></p>

<script>
if (new Date().getHours() < 23) {
  document.getElementById("demo").innerHTML = "Good day!";
  document.getElementByClassName("dummy").innerHTML = "hagrya"
}
</script>

</body>
</html>