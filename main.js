
class ParentEmployee{

    constructor(name,salary){
        this.N=name
        this.S=salary
    }

}

class ChildEmployee extends ParentEmployee{

    constructor(name,salary,bonus){
        super(name,salary)
        this.bonus=bonus

    }

    annuval(){
        document.write(`Name : ${this.N} , Salary: ${this.S} and Bonus: ${this.bonus}<br>`)
        let sum=parseInt(12*this.S)
        document.write(" Annuval Income = "+sum+"<br>")
        document.write(" Annuval Income with Bonus = "+ (sum+parseInt(this.bonus))+"<br><br>")
     }

  
}

let em1=new ChildEmployee(prompt("Enter the name1"),prompt("Enter the Salary1"), prompt("Enter the bonus1"))
let em2=new ChildEmployee(prompt("Enter the name2"),prompt("Enter the Salary2"), prompt("Enter the bonus2"))

em1.annuval()
em2.annuval()



