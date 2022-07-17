import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questionsAndAnswers: any = [
    {
      commentedAnswer: '',
      question : {
        qus : 'ajbdsdfasdf sfuj sdfjsdbf sfb sfsduf sjfasudf sdfsfbusjfasdfusbf sf sjfbsdjf sdaf sjdf sdfuasdbfsd fsjdbfjskd fsjdbfjsd fasd fjasd fjsdfjsd fjksbadfms dfkjsdbfjs dfesd fjsadbnfmasd fjksabfjs fjsd fsjadbfjsadn fas dfjsdfjsd fasd fjsdnfjms fsd fjasdbfjsd fj fsdfjsdnfjsdbfjasdfsdfjsd fsand f',
        userName: 'Test question',
        userType: 'USER',
        userProfile: '',
        id: 21
      }, 
      answers: [
        {
          ans: 'dsadsadas das das dd asd ads sada sdas dada sdas dasd as dasd dad asd asdas das ',
          userName: 'Test answer',
          userType: 'USER',
          userProfile: '',
          id: 31
        },
        {
          ans: 'dsadsadas das das dd asd ads sada sdas dada sdas dasd as dasd dad asd asdas das ',
          userName: 'Test answer2',
          userType: 'USER',
          userProfile: '',
          id: 32
        },
        {
          ans: 'dsadsadas das das dd asd ads sada sdas dada sdas dasd as dasd dad asd asdas das ',
          userName: 'Test answer3',
          userType: 'USER',
          userProfile: '',
          id: 33
        },
        {
          ans: 'dsadsadas das das dd asd ads sada sdas dada sdas dasd as dasd dad asd asdas das ',
          userName: 'Test answer4',
          userType: 'USER',
          userProfile: '',
          id: 34
        }
      ]
    }
  ];

  constructor() { }

  comment(data: any, index: number): void {
    let userName = sessionStorage.getItem('loggedinUser') || ''
    this.questionsAndAnswers[index].answers.push ({
      ans: data.commentedAnswer,
      userName: userName,
      userType: 'USER',
      userProfile: '',
      id: 34
    })
  }

  ngOnInit(): void {
    this.questionsAndAnswers.push(this.questionsAndAnswers[0])
  }

}
