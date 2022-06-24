let userName = prompt('What is your name?')

alert(`Oh, hello ${userName}!`)

const startGame = () => {
  let userPlay = confirm('Do you want to go on an adventure?')
  playGame(userPlay)
}

const playGame = (choice) => {
  if (choice) {
    alert("Ok! Let's go on an adventure!")
    chooseDoors()
  } else {
    alert('Alright, maybe next time!')
  }
}

const chooseDoors = () => {
  let doorChoice = prompt(
    'The Princess has been kidnapped by an evil wizard and is being held captive in his castle! Before you lie three paths to the castle. Each is wrought with danger so choose wisely! LEFT, MIDDLE, or RIGHT?'
  )
  console.log(doorChoice)
  //First First Choice
  if (doorChoice === 'LEFT') {
    let leftDoor = prompt(
      'You have chosen the Toxic Swamp as you path to the castle. Trudging through the swamp you arrive at rainbow bridge guarded by a 2-fingered troll. He refuses to let you pass unless you can guess how many fingers he is hiding behind his back. Type 1 or 2'
    )

    //Second First Choice
    if (parseInt(leftDoor) === 1) {
      alert(
        'You chose wrong! The Troll laughs maniacally as he scoops you up and eats you! You wake up back at the start of your journey...'
      )
      chooseDoors()
      //Second Second Choice
    } else if (parseInt(leftDoor) === 2) {
      let rescue = prompt(
        'You chose correctly! The Troll gives you a bunt cake, tells you the fastest way to the castle, and wishes you on your merry way! You make your way to the castle and are about to fight the wizard when he stops and gives you a choice. 1: you take the princess back but must leave the delicious bunt cake or 2: you can have 5 million schmeckles (the currency of the realm) and go back the way you came. Choose 1 or 2.'
      )
      if (rescue === '1') {
        alert(
          'You have saved the princess but lost your bunt cake. You take her back through the swamp and she is home in time for supper. Play again?'
        )
        chooseDoors()
      } else if (rescue === '2') {
        alert(
          'You have chosen wealth! Princesses are a dime a dozen but money is forever! You ride off into the sunset ladden with heavy sachels and never pay a dime in taxes! Play Again?'
        )
        chooseDoors()

        //First Second Choice
      }
    }
  } else if (doorChoice === 'MIDDLE') {
    let leftDoor = prompt(
      'You have chosen the Endless Sea. You go to the port and seak out a suitable vessel to board and travel to the evil wizards castle. There are two ships to choose from, RED and GREEN'
    )
    //Second First Choice
    if (leftDoor === 'RED') {
      alert(
        'The Red ship is captained by a swashbucklin captain. You are worried at first but he turns out to be a kindered spirit. He agrees to help you rescue the Princess. With the help of his crew you storm the castle and rescue her, sailing off into the sunset... Play Again?'
      )
      chooseDoors()

      //Second Second Choice
    } else if (leftDoor === 'GREEN') {
      alert(
        'The Green ship is owned by an aristocratic merchant. He seems trustworthy at first but while you sleep he robs you of your belongings and casts you over the side. You awake on a deserted island with no apparent way of escape or chance of saving the princess. Play Again?'
      )
      chooseDoors()
    } else {
      alert("That wasn't a choice! Go back to start you silly goose!")
      chooseDoors()
    }
    //First Third Choice
  } else if (doorChoice === 'RIGHT') {
    const numChoice = prompt(
      'You have chosen the Blazing Desert! As you walk along the sands you come across a wandering hermit who trades a strange mirror for your broken watch. While polishing the mirror you trigger a magic array that seems to allow the holder to teleport into castles (what are the odds?). The catch is that it is a roll of the dice which castle it will send you to. For the sake of the princess you decide to take that risk. Choose the random castles by typing 1, 2, or 3'
    )

    switch (numChoice) {
      case '1':
        alert(
          '1 is your lucky number because you teleport right into the castle next to the princess! You scoop her off her feet and run out of the castle to happily ever after! Play again?'
        )
        chooseDoors()
        break
      case '2':
        alert(
          'You chose the 2nd castle, which turns out to be a number 2 of a move because it sends you to a castle on the opposite side of the kingdom. You have failed the princess and the kingdom, may as well give and try again...'
        )
        confirm('Play again?')
        chooseDoors()
        break
      case '3':
        alert(
          'You chose the third castle which actually belonged to King Neptune and was at the bottom of the sea. Not being a mermaid, you drown tragically and the princess is doomed to her fate...'
        )
        confirm('Play again?')
        chooseDoors()
    }
  } else {
    alert("That wasn't a choice!")
    chooseDoors()
  }
}

startGame()

// if (leftDoor === '1') {
//     alert('first choice left door')
//     //Second Second Choice
//   } else if (leftDoor === '2') {
//     alert('second choice left door')
//     //Second Third Choice
//   } else if (leftDoor === '3') {
//     alert('third choice left door')
//   } else {
//     alert("That wasn't a choice! Go back to start you silly goose!")
//     chooseDoors()
//   }
