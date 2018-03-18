function createURl(myurl)
{
  var right_count=0
  var wrong_count=0
  var loc = window.location.href
  var patt = loc.indexOf('?')
  var righturlstr = myurl.indexOf('right')
  if (patt > 0)
  {
    var right_count = window.location.href.split('?')[1].split('&')[0].split('=')[1]
	var wrong_count = window.location.href.split('?')[1].split('&')[1].split('=')[1]
  }
  
  if (righturlstr > 0)
  {
    right_count=parseInt(right_count)+1
  }
  else
  {
    wrong_count=parseInt(wrong_count)+1
  }
  urlpatt='?right='+right_count+'&wrong='+wrong_count
  location.href=myurl+urlpatt
}

function passURl(myurl)
{
  var loc = window.location.href
  var patt = loc.indexOf('?')
  if (patt > 0)
  { 
    urlpatt=loc.split('?')[1]
	location.href=myurl+'?'+urlpatt
  }
  else
  {
    location.href=myurl
  }
}