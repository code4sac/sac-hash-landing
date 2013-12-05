<?php
include('mysqli.php');
$mysql = new mysql();

$tags = json_decode($_POST['tags']);
foreach($tags as $tag) {
  $tag->hashtag = preg_replace('/#/', '', $tag->hashtag);
  $ht = filter_var($tag->hashtag, FILTER_SANITIZE_STRING);

  $query = "
    INSERT INTO hashtag_suggestions
    VALUES('0', '$ht', '', now())
  ";
  $mysql->insert($query);
}


?>
