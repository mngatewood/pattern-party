
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
