
const toggleCodeAccordion = () => {
  const text = $("#accordion__toggle-code-button").text()
  $('#accordion__code-container').toggleClass('hidden');
  $("#accordion__toggle-code-button").text(
    text === 'HIDE CODE' ? 'VIEW CODE' : 'HIDE CODE'
  )
}

$("#accordion__toggle-code-button").click(toggleCodeAccordion)

const toggleCodeFlexibleCards = () => {
  const text = $("#flexible-cards__toggle-code-button").text()
  $('#flexible-cards__code-container').toggleClass('hidden');
  $("#flexible-cards__toggle-code-button").text(
    text === 'HIDE CODE' ? 'VIEW CODE' : 'HIDE CODE'
  )
}

$("#flexible-cards__toggle-code-button").click(toggleCodeFlexibleCards)

const toggleCodeHeaderBar = () => {
  const text = $("#header-bar__toggle-code-button").text()
  $('#header-bar__code-container').toggleClass('hidden');
  $("#header-bar__toggle-code-button").text(
    text === 'HIDE CODE' ? 'VIEW CODE' : 'HIDE CODE'
  )
}

$("#header-bar__toggle-code-button").click(toggleCodeHeaderBar)

const toggleHiddenMenu = () => {
  $('#header-bar--mobile-menu').slideToggle("slow");
  $('#header-bar--nav').slideToggle("slow");
  if ($(window).width() < 500 && $('#header-bar--search').css("display") == "none") {
    console.log("true");
    setTimeout(() => {
      $('#header-bar--search').css("display", "block");
    }, 500);
    $('#header-bar--search').css("top", "300");
  } else if ($(window).width() < 500) {
    $('#header-bar--search').css("display", "none")
  }
}

if ($(window).width() > 500) {
  $('#header-bar--search').css("display", "block");
}
else {
  $('#header-bar--search').removeAttr('display');
}
