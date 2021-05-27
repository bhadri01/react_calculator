import React from 'react';
import CalculatorTitle from './CalculaterTitle';
import OutputScreen from './Outputscreen';
import Button from './Button';

class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            question:'',
            answer:''
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        const value = event.target.value

        switch (value){
            case '=':{
                if(this.state.question !== '')
                {
                    var ans = '';
                    try
                    {
                        ans = eval(this.state.question)
                    }
                    catch(err)
                    {
                        this.setState({answer:"Math Error"})
                    }
                    if(ans === undefined)
                    {
                        this.setState({answer:"Math Error"})
                    }
                    else
                    {
                        this.setState({answer:ans,question:''})
                    }
                }
                else
                {
                    this.setState({answer:"no value"})
                }
                break;
            }
            case 'clear':{
                this.setState({answer:'',question:''})
                break;
            }
            case 'delete':{
                var str = this.state.question;
                str = str.substr(0,str.length-1);
                this.setState({question:str});
                break;
            }
            default:{
                this.setState({question:this.state.question += value})
            }
        }

    }
    render(){
        return (
           <div className="container">
               <CalculatorTitle value="React Calculator" />
               <div className="maincalc">
                    <OutputScreen  question={this.state.question} answer={this.state.answer}/>
                    <div className="buttonrow">
                        <Button label="clear" handleClick={this.handleClick} />
                        <Button label="delete" handleClick={this.handleClick} />
                        <Button label="." handleClick={this.handleClick} />
                        <Button label="/" handleClick={this.handleClick} />
                    </div>
                    <div className="buttonrow">
                        <Button label="7" handleClick={this.handleClick} />
                        <Button label="8" handleClick={this.handleClick} />
                        <Button label="9" handleClick={this.handleClick} />
                        <Button label="*" handleClick={this.handleClick} />
                    </div>
                    <div className="buttonrow">
                        <Button label="4" handleClick={this.handleClick} />
                        <Button label="5" handleClick={this.handleClick} />
                        <Button label="6" handleClick={this.handleClick} />
                        <Button label="-" handleClick={this.handleClick} />
                    </div>
                    <div className="buttonrow">
                        <Button label="1" handleClick={this.handleClick} />
                        <Button label="2" handleClick={this.handleClick} />
                        <Button label="3" handleClick={this.handleClick} />
                        <Button label="+" handleClick={this.handleClick} />
                    </div>
                    <div className="buttonrow">
                        <Button label="0" handleClick={this.handleClick} />
                        <Button label="=" handleClick={this.handleClick} />
                    </div>
               </div>
           </div>
        );
    }
}

export default Calculator;