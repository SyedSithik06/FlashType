import React from "react";
import './App.css';
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";


const TotalTime= 60; 
const ApiUrl= "http://metaphorpsum.com/paragraphs/1/6";
const DefaultState = {
   selectedParagraph: "",
         timerStarted: false,
         timeRemaining: TotalTime,
         words: 0,
         characters: 0,
         wpm: 0,
         testInfo:[]

};

class App extends React.Component{
    state= DefaultState;
    
    
    fetchNewParagraph = () =>{
      fetch(ApiUrl)
      .then(response => response.text())
      .then(data =>{
      const selectedParagraphArray= data.split("");
      const testInfo = selectedParagraphArray.map(selectedLetter =>{
      return{
        testLetter: selectedLetter,
        status: "notAttempted"
      };
   });
   this.setState({...DefaultState, testInfo, selectedParagraph: data });
     }); 

    }
     
    componentDidMount(){ 
        this.fetchNewParagraph();
    };

    startTimer = () =>{
      this.setState({timerStarted: true});
      const timer = setInterval(()=>{
          if(this.state.timeRemaining > 0 ) {
            //Change the Wpm
            const timeSpent = TotalTime - this.state.timeRemaining;
            const wpm = timeSpent > 0
                ?(this.state.words / timeSpent) * TotalTime :0;
            this.setState({
               timeRemaining: this.state.timeRemaining -1,
               wpm: parseInt(wpm),
              });
          } else {
            clearInterval(timer);
          }
           
      },1000);
   };

      startAgain =() => this.fetchNewParagraph();
    
      handleUserInput = (inputValue) => {
        if(!this.state.timerStarted) this.startTimer();

        /**
         * 1.Handle the UnderFlow case - all characters -- not attempted - ear;y exit
         * 2.Handle the overflow case -  early exit (finsih the task before the time)
         * 3.handle backspace case    -    Mark the [index + 1 ] element not attempted
         *                            - (irrespective whether the index is less than zero)
         *                            -dont forget to check for the overflow case here
         *                            - (index +1 --> out of bound, when index === length-1 )
         * 4. update  the status in testInfo
         *            - Find out last character  in the inputValue  and its index
         *            -check if the character at the same index in testInfo (state) matches
         *            - if yes- "correct"
         *         No - "incorrect"
         * 5. irrespective of the case characters, words ,speed can be updated
         */

           const characters = inputValue.length;
           const words = inputValue.split(" ").length; 
           const index = characters - 1;

         //!. UnderFlow Case
           if(index < 0){
            this.setState({
               testInfo: [
                  {
                     testLetter:this.state.testInfo[0].testLetter,
                     status: "notAttempted"
                  },
                  ...this.state.testInfo.slice(1),
               ],
               characters,
               words,
            }) ;
              return;
           }

           // 2. OverFlow Case
           if (index >= this.state.selectedParagraph.length){
              this.setState({characters, words});
                 return;
           }
         //3.handle backspace
        // make a copy oof testInfo
         const testInfo = this.state.testInfo;
         if (!(index === this.state.selectedParagraph.length - 1))
          testInfo[index + 1 ].status = "notAttempted";

          //check for the correct typed letters
           
          const isCorrect = inputValue[index] === testInfo[index].testLetter;

         //update the testInfo
          testInfo[index].status = isCorrect ? "correct" : "incorrect";

         //update the state
          this.setState({
                 testInfo,
                 words,
                 characters  
          }); 
      };
      
     

    render(){
    
        return(
           <div className="app">
            {/*Nav Section */}
             <Nav/>

            {/* Landing Page*/}
             <Landing/>

            {/* Challange Section*/}
            <ChallengeSection
               selectedParagraph={this.state.selectedParagraph}
               words={this.state.words}
               characters={this.state.characters}
               wpm={this.state.wpm}
               timeRemaining={this.state.timeRemaining}
               timerStarted={this.state.timerStarted}
               testInfo = {this.state.testInfo}
               handleUserInput = {this.handleUserInput}
               startAgain = { this.startAgain}
            />
           
            {/* Footer */}
            <Footer/>
           </div>
        )
    }
}

export default App;