import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Error "mo:base/Error";
import Time "mo:base/Time";
import Float "mo:base/Float";


actor Mbank{
  stable var currentValue: Float = 300;
  // currentValue := 200;
  Debug.print(debug_show(currentValue));
  stable var startTime = Time.now();
  // startTime := Time.now();

  Debug.print(debug_show(startTime));
  

  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withDraw(wAmount: Float){
    let deduction: Float = currentValue - wAmount;
    if(deduction >= 0){
    currentValue -= wAmount;
    Debug.print(debug_show(currentValue));
    }else{
    Debug.print "Error is the value" ; 
    }
  };

  public query func checkBalance(): async Float{
    return currentValue;
  };

  public func compound(){
    var currentTime = Time.now();
    let elapsedTimeInSec = (currentTime - startTime)/1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(elapsedTimeInSec));
    startTime := currentTime;
  };

};

