import React, {useState, useEffect} from 'react';
import {    useParams  } from "react-router-dom";
import {firestore} from './Firebase'
import AddExpense from './AddExpense';

function TripDetails() {
    const { id } = useParams();
    const [expenses,setExpenses] = useState([]);
    const tripRef = () => {
        return firestore.doc(`/trips/${id}`)
    }
    const expensesRef = () => {
        return tripRef().collection(`expenses`)
    }


    const loadExpenses = () => { expensesRef().onSnapshot(snapshot => {
        setExpenses(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })}

    useEffect(() => {
        loadExpenses()
        },[])

    return(
        <div>
           {expenses.map(expense =><div key={expense.id} >
           <div>{expense.id}</div>
           <div>{expense.purpose}</div>
           <div>{expense.charge}</div>
         </div> )}
         <AddExpense tripId={id}/>
        </div>
    )
}

export default TripDetails