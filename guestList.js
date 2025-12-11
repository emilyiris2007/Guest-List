(function () {
    const maxGuests = 10;
    const guests = [];
  
    function askNonEmpty(promptText) {
      while (true) {
        const input = prompt(promptText);
        if (input === null) return null; 
        const trimmed = input.trim();
        if (trimmed.length > 0) return trimmed;
      }
    }
  
    function isYes(s) {
      return s && s.trim().toLowerCase().startsWith("y");
    }
  
    for (let i = 1; i <= maxGuests; i++) {
      const name = askNonEmpty(`Enter guest name #${i}:`);
      if (name === null) {
        alert("Guest entry cancelled.\nGuest list: " + guests.join(", "));
        return;
      }
      guests.push(name);
    }
  
    const eleventh = askNonEmpty("Enter guest name #11:");
    if (eleventh === null) {
      alert("Guest list: " + guests.join(", "));
      return;
    }
  
    const yn = prompt(
      "You can only add a maximum of 10 people to your guest list. " +
      "Would you like to replace someone on the list with the last person you entered? yes/no:"
    );
  
    if (isYes(yn)) {
      const nameToReplace = askNonEmpty(
        "Current list:\n" + guests.join(", ") + "\n\n" +
        "Please enter the name of the person you would like to replace:"
      );
      if (nameToReplace === null) {
        alert("No replacement made.\nGuest list: " + guests.join(", "));
        return;
      }
  
      const idx = guests.findIndex(
        g => g.toLowerCase() === nameToReplace.trim().toLowerCase()
      );
  
      if (idx !== -1) {
        guests[idx] = eleventh;
        alert("Updated guest list: " + guests.join(", "));
      } else {
        alert(
          "That name was not found in the first 10 guests.\n" +
          "No changes made.\nGuest list: " + guests.join(", ")
        );
      }
    } else {
      alert("Guest list: " + guests.join(", "));
    }
  })();
  