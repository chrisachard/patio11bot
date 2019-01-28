
function getAnswer(question) {

  const relatedQuotes = quotes.filter(function(quote) {
    const matches = question.toLowerCase().split(/\s/).filter(function(word) {
      return word.length > 4 && 
        quote.quote.toLowerCase()
          .includes(word.replace(/[^\a-z]/, ''))
    })
    return matches.length > 0
  })

  if(relatedQuotes.length > 0) {
    return relatedQuotes[Math.floor(Math.random() * relatedQuotes.length)]
  } else {
    return quotes[Math.floor(Math.random() * quotes.length)]    
  }

}

const quotes = [

  {quote: "You can trivially pick up $5,000 in salary negotiations just by sucking less",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Virtually any amount of money available to you personally is mouse droppings to your prospective employer",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Resumes are an institution created to mean that no one has to read resumes",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Negotiating never makes (worthwhile) offers worse",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Never give a number",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "Of course you can",
  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/"},

  {quote: "The price for anything (including you) is a function of the supply of it and demand for it",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Software solves business problems",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Engineers are hired to create business value, not to program things",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "You really want to be attached to profit centers",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Don’t call yourself a programmer",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "You are not defined by your chosen software stack",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Co-workers and bosses are not usually your friends",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "You radically overestimate the average skill of the competition because of the crowd you hang around with",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Networking: it isn’t just for TCP packets",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Academia is not like the real world",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "People who are skilled in negotiation make more than those who are not",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Working in a startup is a career path but, more than that, it is a lifestyle choice",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Your most important professional skill is communication",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "You will often be called to do Enterprise Sales and other stuff you got into engineering to avoid",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "Modesty is not a career-enhancing character trait",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "All business decisions are ultimately made by one or a handful of multi-cellular organisms closely related to chimpanzees, not by rules or by algorithms",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "At the end of the day, your life happiness will not be dominated by your career",
  url: "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/"},

  {quote: "I have never seen a computer system which handles names properly and doubt one exists, anywhere",
  url: "https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/"},

  {quote: "All of these assumptions are wrong",
  url: "https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/"},

  {quote: "Time can be stored",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Not all time debt comes from intrinsically negative activities",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Every line of code you write is time debt",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Pick your problem well",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Avoid setting publicly visible deadlines",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Cultivate relationships with effective freelancers",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Understand the two types of time",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Avoid events, plan for processes",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Document.  Everything.",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Keep A routine, when appropriate",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Seek the advice of folks you trust.  Disregard some of it.",
  url: "https://www.kalzumeus.com/2010/03/20/running-a-software-business-on-5-hours-a-week/"},

  {quote: "Your AdWords strategy is very sensitive to conversion rates",
  url: "https://www.kalzumeus.com/2009/09/05/desktop-aps-versus-web-apps/"},

  {quote: "Web applications are easier to support",
  url: "https://www.kalzumeus.com/2009/09/05/desktop-aps-versus-web-apps/"},

  {quote: "Long cycles mean low innovation.  Short cycles mean fast innovation.",
  url: "https://www.kalzumeus.com/2009/09/05/desktop-aps-versus-web-apps/"},

  {quote: "Pancake buttons work",
  url: "https://www.kalzumeus.com/2009/03/07/how-to-successfully-compete-with-open-source-software/"},

  {quote: "User Experience never ends",
  url: "https://www.kalzumeus.com/2009/03/07/how-to-successfully-compete-with-open-source-software/"},

  {quote: "SEO has a lot of opportunities for micro-optimizations in it",
  url: "https://www.kalzumeus.com/2010/01/24/startup-seo/"},

  {quote: "Get something out the door as soon as possible",
  url: "https://www.kalzumeus.com/2010/01/24/startup-seo/"},

  {quote: "Focus on search terms you can win",
  url: "https://www.kalzumeus.com/2010/01/24/startup-seo/"},

  {quote: "Good SEO can make your startup",
  url: "https://www.kalzumeus.com/2010/01/24/startup-seo/"},

  {quote: "Identify risks to your service",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "Software systems are also, overwhelmingly, killed by their moving parts",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "Your system is most vulnerable where it sees dynamism, complexity, and change",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "Never call an external API from within an HTTP request/response cycle",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "You are the least reliable component of your system",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "If you have to do it more than once, it should be automated or made into a checklist",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "Automation is your friend",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "Be notified of failures in a timely manner",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "Learn from failures to prevent re-occurrence",
  url: "https://www.kalzumeus.com/2010/04/20/building-highly-reliable-websites-for-small-companies/"},

  {quote: "You can probably stand to charge more",
  url: "https://www.kalzumeus.com/2006/08/14/you-can-probably-stand-to-charge-more/"},

  {quote: "Charge More",
  url: "https://www.kalzumeus.com/2006/08/14/you-can-probably-stand-to-charge-more/"},

]

