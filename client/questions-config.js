
export default {
  questions: [
    {
      id: 1,
      details: {
        name: 'Name(s) of travelers?',
        answer: {
          type: 'TEXTLIST',
          list: [
            { id: 1, placeholder: 'first traveler', model: '.travelers.first'},
            { id: 2, placeholder: 'second traveler', model: '.travelers.second'},
            { id: 3, placeholder: 'third traveler', model: '.travelers.third'},
            { id: 4, placeholder: 'fourth traveler', model: '.travelers.fourth'}
          ],
          dataName: 'travelers',
          dataID: {
            idOne: 'travelersFirst',
            idTwo: 'travelersSecond'
          },
          dataValue: {
            optionOne: 'sooner',
            optionTwo: 'later',
          },
          dataModel: '.travelers',
        }
      },
      current: true,
    },
    {
      id: 2,
      details: {
        name: 'what is your departure date?',
        answer: {
          type: 'DATE',
          dataName: 'departure',
          dataID: {
            idOne: 'departureDateSoon',
            idTwo: 'departureDateLater'
          },
          dataValue: {
            optionOne: 'sooner',
            optionTwo: 'later',
          },
          dataModel: '.departure',
        }
      },
      current: false,
    },
    {
      id: 3,
      details: {
        name: 'what is your travel destination?',
        answer: {
          type: 'RADIOLIST',
          list: [
            'Hawaii',
            'Carribean',
            'Italy'
          ],
          dataName: 'destination',
          dataID: 'departurelocation',
          dataValue: {
            optionOne: 'Hawaii',
            optionTwo: 'Carribean',
            optionThree: 'Italy'
          },
          dataModel: '.destination',
        }
      },
      current: false,
    }
  ]
}