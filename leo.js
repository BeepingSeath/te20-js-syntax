//import javax.swing.*;

//public class pythagoras{
//	public static void main (String[] arg) {
//	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
//	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
//	double c = Math.sqrt(a*a + b*b);
//	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
//	}
//}

let a = parseInt(prompt('Första sidan i triangeln?'));
let b = parseInt(prompt('Andra sidan i triangeln?'));
const c = Math.sqrt(a*a + b*b);
alert(c);