<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<script defer src="scripts/binary.js"></script>-->
    <script defer src="scripts/equation.js"></script>
    <script defer src="scripts/fraction.js"></script>
    <script defer src="scripts/main.js"></script>
    <script defer src="scripts/schoolwork.js"></script>
    <script defer src="scripts/simpleeq.js"></script>
    <!--<script defer src="scripts/time.js"></script>-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=contrast" />
    <link id = "icons"rel="icon" type = "image/x-icon" href="/icons/calculate.png">
    <style>
        
      

       

        body{
            margin: 0;
            /* Schriftart */
            font-family:Arial, Helvetica, sans-serif;
         
                       
        }
        h1, h2{
            text-align: center;
        }
        .dark-mode{
            
           
            color: white;
            background-color: black;

        }
        a{
        
            text-decoration: none;
        }
     

        h1{
            text-align: center;
        }
        #darkModeToggle{
            cursor: pointer;
        }
        summary{
            color: black;
            background-color: cyan;
            border-radius: 8px;
        }
        details{
            margin: 8px;
            border-radius: 16px;
        }
        textarea{
            border-radius: 8px;
            padding: 8px;
        }
        /* --- Hilfsklassen ---*/

        .standard-container{

            display: flex;
        }

        .text-highlighted{
            color: var(---color_1);


        }
        .side404{
            display: flex;
            justify-content: center;
            align-items: center;
        }
 /* --- Top Line --- */

        /*.logo{
            display: flex;
            font-size: 24px;
            border-radius: 50%;
            border-style: solid;
            min-width: 24px;
            min-height: 24px;
            position: relative;
            float: left;
            padding: 8px;
            background-color: yellowgreen;
            color: white;
            align-items: center;
            justify-content: center;
        }
        .logo a{
            text-decoration: none;
            color: white;
        }
        .logo img{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
        }*/
        .topline{
            background-color: orange;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 80px;
            box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            
        }
        .topline h1{
            margin-left: 20px;
        }

        /* --- Navigation ---*/

        .main-nav{
            width: 10%;
            background-color: rgba(0,255,255);
            padding-top: 150px;
            min-height: 100vh;
        }
        

        
        .main-nav a{
            display: block;
            text-decoration: none;
            padding: 8px;
            display: flex;
            align-items: center;
            color: black;
        }
        .main-nav a:hover{
            background-color: rgba(0,0,0,0.5);
            color: rgba(0,255,255);
        }

        .currentpage{
            
            background-color: rgba(255,180,20,0.5);
        }
        .main-nav .currentpage a{
            color: green;
        }
        .subpage{
            display: block;
            padding: 8px;
            display: flex;
            align-items: center;
            
            background-color: rgba(255,180,20,0.5);
            color: black;
        }
        #darkModeToggle{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    /*--- Content ---*/
        .content{
            
            width: 90%;
            padding: 32px;
            margin-top: 80px;
          
            background-color: rgba(55,255,255,0.1)
        }
        /* -- Main Section -- */
        /* -- Main Page-- */
        .main-page{
            
            margin-bottom: 50px;
            
            
        }
        
        .linkbtn{
            border: 1px solid black;
            background-color: yellowgreen;
            color: red;
       
            border-radius: 8px;
            text-align: center;
            margin: 8px;
        }


        .linkbtn:hover{
            background-color: red;
            color: yellowgreen;
            border: 1px solid black;
            border-radius: 2px;
            cursor: pointer;

        }
        .descriptions{
            display: block;
            float: left;
            width: 100%;
            padding: 8px;
            
        }
        .description-card{
            display: block;
            width: 31%;
            float: left;
            border: 1px solid black;
            border-radius: 8px;
            padding: 8px;
            margin: 8px;
            color: yellow;
            background-color: purple;
            align-items: center;
            justify-content: center;
        }
        
        

        /* -- Fraction/Brüche -- */
        .calculation{
            max-width: 1800px;
            padding: 8px;
            border: 1px double black;
            border-radius: 8px;
        }
        .calcDescription{
            margin: 8px;
            border: 1px solid black;
            border-radius: 8px;
            padding: 8px;
        }
        .calcDescription details{
            border: 1px solid black;
            border-radius: 8px;
            
            margin-top: 8px;
        }
        .calcDescription summary:hover{
            cursor: pointer;
        }
        .calcDescription summary{
            font-weight: bold;
            font-size: 20px;
        }
        .calcOperation{
            padding: 8px;
            margin: 8px;
            border: 1px solid black;
            border-radius: 5px;
            width: 60%;
        }
        summary{
            text-align: center;
            background-color: whitesmoke;
            margin: 8px;
        }
        .calcFraction{
            margin: 8px;
            padding: 8px;
            border: 1px solid black;
            border-radius: 8px;
            
            
        }

        .commonAdvises{
            margin-top: 8px;
            border: 1px solid black;
            padding: 8px;
        }
        .fractionCalculation{
            border: 1px solid black;
            padding: 8px;
        }
        .fractionCalculation summary{
            font-weight: bold;
            font-size: 24px;
        }
        .fractionCalculation summary:hover{
            cursor: pointer;
        }
        .commonAdvises summary:hover{
            cursor: pointer;
        }
        .commonAdvises summary{
            font-weight: bold;
            font-size: 24px;
        }
        .calcWayF{
            height: 300px;
            width: 500px;
            margin: 8px;
            
        }
        #outputCalc{
            width: 250px;
        }
        #inputIntNume{
            visibility: hidden;
        }
        #intNum{
            visibility: hidden;
        }
        #buttonLCM{
            margin: 5px;
        }
        #outputKGV{
            border: 1px solid black;
            width: 150px;
            border-radius: 10px;
        }
        #primelist{
            visibility: hidden;
            width: 500px;
            height: 500px;
        }
        /* -- Equlation/Gleichungen --*/
        #result1{
            visibility: hidden;
        }
        #inputResult1{
            visibility: hidden;
        }
        #result2{
            visibility: hidden;
        }
        #inputResult2{
            visibility: hidden;
        }
        #labelWay{
            color: blue;
        }
        #calcWay{
            height: 350px;
            width: 500px;

        }
        #results>*{
            visibility: hidden;
        }
        .calcDetails{
            border: 1px solid black;
        }
        .calcDetails summary{
            font-weight: bold;
            font-size: 20px;
        }
        .calcDetails summary:hover{
            cursor: pointer;
        }
        #labelCheck{
            visibility: hidden;
            float: right;
        }
        #areaCheck{
            visibility: hidden;
            height: 350px;
            width: 250px;

        }
        #areaSimpleCheck{
            visibility: hidden;
            height: 350px;
            width: 500px;

        }
        .eqResult{
            height: 25px;
            visibility: hidden;
        }
        #howToEq{
            visibility: hidden;
            min-height: 120px;
            width: 250px;
        }


        /* Schoolwork - Section*/
        @media print{
            .noPrint{
                display: none;
            }
        }

        .taskHead{
            visibility: hidden;
        }
        .taskDescriptionOl{
            list-style-type: lower-alpha;
        }
        .tasksCreate{
            border: 1px solid black;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 10px;
        }
        .tasksCreate summary{
            font-weight: bold;
            font-size: 20px;
        }
        .tasksCreate summary:hover{
            cursor: pointer;
        }
        /* Schoolwork Results*/
        .schoolwork{
            max-width: 1800px;
            padding: 8px;
            border: 1px double black;
            border-radius: 8px;
        }
        .schoolwork li{
            list-style-type: disc;
        }
        .resultsWork{
            margin: 16px;
            border: 1px solid black;
            padding: 16px;
            border-radius: 8px;
        }

        .resultsWork input{
            width: 50px;
        }
        .buttonResetT{
            disabled: true;
        }
        .labelPoints{
            width: 150px;
            border: 1px solid green;
        }
        .grade{
            width: 200px;
            border: 1px solid grey;
        }
        .errorMessage{
            color: red;
            font-weight: bold;
        }
        .linkbtnWork{
            border: 1px solid black;
            background-color: purple;
            color: yellow;
            width: 50%;
            border-radius: 8px;
            text-align: center;
            margin-top: 8px;
            margin-left: 25%;
            margin-bottom: 10px;
        }


        .linkbtnWork:hover{
            background-color: yellow;
            color: purple;
            border: 1px solid black;
            border-radius: 2px;
            cursor: pointer;

        }
        .resultCheck{
            border: 1px solid black;
            
            padding: 16px;
            margin-bottom: 8px;
        }
        .resultCheck summary{
            font-weight: bold;
            font-size: 24px;
        }
        .resultCheck summary:hover{
            cursor: pointer;
        }
        .resultsWork{
            margin: 8px;
            margin-bottom: 8px;
        }
        .resultsWork summary{
            font-weight: bold;
            font-size: 24px;
        }
        .resultsWork summary:hover{
            cursor: pointer;
        }
        .labelErrors{
            visibility: hidden;
            
        }
        .inputWrong{
            color: red;
            
        }
        .createEquation{
            border: 1px solid black;
            margin-bottom: 10px;
        }

        .createEquation summary{
            font-weight: bold;
            font-size: 24px;
        }
        .createEquation summary:hover{
            cursor: pointer;
        }

        .createEqDescription {
        
            margin: 8px;
            
            border: 1px solid black;
            border-radius: 8px;
            padding: 8px;
        }

        .createEqCalc {
            padding: 8px;
            margin: 8px;
            border: 1px solid black;
            border-radius: 8px;
           
        }
        .choice{
            margin: 8px;
        }
        

         /*--- Footer ---*/
        .footer{
            padding: 100px;
            text-align: center;
            background-color: yellowgreen;
            color: white;
                 
        }
        .footer a{
            text-decoration: none;
            color: white;
            
        }

    </style>
    <title>Mathematik Support</title>
</head>
<body>
    <?php 
        $headline = "";
        $description = "";
        if($_GET["page"]== "home"){
            $headline = "Übersicht";
            $description = "Mathematik Support";
        }
        if($_GET['page']== "fraction"){
            $headline = "Brüche";
            $description = "Berechnungshilfen für Brüche und <br> Berechnung von Brüchen";
        }
        if($_GET['page']== "equation"){
            $headline = "Gleichungen";
            $description = "Einfache und quadratische Gleichungen lösen";
        }
        if($_GET['page']== "schoolwork"){
            $headline = 'Aufgaben';
            $description = "Schulaufgaben erstellen";
        }
        if($_GET['page'] != "home" && $_GET['page'] != "fraction" && $_GET['page'] != "equation" && $_GET['page'] != "schoolwork"){
            $headline = '404';
            $description = 'Diese Seite existiert nicht! This page does not exist!';
            
        }
    ?>

    <div class="topline">
        <?php echo '<h1>Mathematik Support - '.$headline. '</h1>'; ?>
    </div>
    <div class="standard-container">
        <div class="main-nav">
            
            <a href="index.php?page=home" <?php if($_GET['page']== "home"){echo 'class="currentpage"';}?>>Home</a>
            <a href="index.php?page=fraction"<?php if($_GET['page']== "fraction"){echo 'class="currentpage"';}?>>Brüche</a>
            <a href="index.php?page=equation"<?php if($_GET['page']== "equation"){echo 'class="currentpage"';}?>>Gleichungen</a>
            <a href="index.php?page=schoolwork"<?php if($_GET['page']== "schoolwork"){echo 'class="currentpage"';}?>>Aufgaben</a>
            <div id="darkModeToggle" onclick="toggleDarkMode()"><span class="material-symbols-outlined">contrast</span></div>
        </div>
    
        <div class="content">
            <?php 
            
                if($_GET["page"]== "home"){
                    echo '
                    <div class="main-page">
                    <h1>'.$description.'</h1>
                        <p>Auf dieser Seite möchte ich euch einige Hilfen für mathematische Aufgaben geben.</p>
                        
                    <div class ="descriptions">
                        <div class="description-card">
                        
                        <h2>Brüche</h2>
                            <ol>
                                <li><h3>Bausteine für Brüche:</h3></li>
                                    <ul>
                                        <li>KGV - Das kleinste gemeinsame Vielfache
                                        </li>
                                        <li>ggT - Der größte gemeinsame Teiler</li>
                                        <li>Primzahlenkontolle</li>
                                        <li>Liste der Primzahlen</li>
                                        
                                    </ul>
                            <li><h3>Berechnung von Brüchen</h3></li>
                                <ul>
                                    <li>Addition</li>
                                    <li>Subtraktion</li>
                                    <li>Multiplikation</li>
                                    <li>Division</li>
                                </ul>
                            </ol>
                    >> Zu den Brüchen <a href="index.php?page=fraction"><div class="linkbtn"> Brüche</div></a>
                    </div>
                    
                    <div class="description-card">
                        <h3>Gleichungen:</h3>
                            Hier könnt ihr:
                        <ul>
                            <li>quadratische Gleichungen lösen</li><br>
                            <li>einfache Gleichungen lösen</li>
                        </ul>
                    >> Zu den Gleichungen <a href="index.php?page=equation"><div class="linkbtn">Gleichungen</div></a>
                    </div>
                    <div class="description-card">
                        <h3>Aufgaben erstellen</h3>
                            Hier könnt ihr:
                        <ul>
                            <li>Aufgaben zufällig erstellen lassen</li>
                        </ul>
                        >>Zur Aufgabenerstellung <a href="index.php?page=schoolwork"><div class="linkbtn">Aufgaben erstellen</div></a>
                    </div>
                    
                    
                        
                    </div>
                    </div>
            
                    ';
                }
                if($_GET['page']== "fraction"){
                    echo '
                    <div class="calculation">
                        <h2>'.$description.'</h2>
                        Willkommen <br>
                        Auf dieser Seite findest du Hilfen zum Rechnen mit Brüchen <br>
                        <ol>
                            <li>Berechnungshilfen</li>
                            <ul>
                                <li>Diese kannst du nutzen um Brüche zu berechnen</li>
                            </ul>
                            <li>Berechnung</li>
                            <ul>
                                <li>Hier werden die Brüche berechnet</li>
                            </ul>
                        </ol>
                        Klicke auf die eingerahmten Überschriften und du bekommst eine Erklärung sowie eine Anleitung für den jeweiligen Bereich.
                        <details class="commonAdvises">
                            <summary>Berechnungshilfen</summary>
                        Hier kannst du ein paar wichtige mathematische Bausteine für Brüche berechnen lassen. 
                        <ul>
                        <li>KGV</li> <li>GGT</li> <li>Primzahlenkontolle</li> <li>eine Liste von Primzahlen in einem bestimmten Wertebreich.</li></ul>
                        <div class="calcDescription">
                            <h2>Erklärung (Ein Klick auf die Boxen öffnet die entsprechende Beschreibung)</h2>
                            <details>
                                <summary>Das kleinste gemeinsame Vielfache - KGV</summary>
                            <h3>Beschreibung:</h3>
                                Was ist das KGV und wofür ist es gut? <br>
                                Was?<br>
                                Das kleinste gemeinsame Vielfache ist die kleinste, ganze Zahl, die man erhält, wenn man zwei ganze Zahlen mit ganzen Zahlen multipliziert. <br>
                                Wofür?
                            <ol>
                                <li>Es hilft bei der Berechnung von Brüchen.</li>
                                <li>Man kann dadurch den Nenner bei einer Addition oder Subtraktion von Brüchen ermitteln.</li>
                            </ol>
                            </details>
                            <details>
                                <summary>Der größte gemeinsame Teiler - GGT</summary>
                                <h3>Beschreibung:</h3>
                                    Was ist der GGT und wofür ist er gut? <br>
                                    Was?<br>
                                    Der größte gemeinsame Teiler ist die größte, ganze Zahl, durch die zwei ganze Zahlen ohne Rest teilbar sind. <br>
                                    Wofür?
                            <ol>
                                <li>Er hilft bei der Berechnung von Brüchen.</li>
                                <li>Man kann dadurch ermitteln, ob ein Bruch gekürzt werden kann.</li>
                            </ol>
                            </details>
                            <details>
                                <summary>Primzahlenkontolle</summary>
                                <h3>Beschreibung:</h3>
                                Was ist eine Primzahl und wofür ist sie gut?<br>
                                Was?<br>
                                Eine Primzahl ist eine Zahl, die bei einer Division nur eine ganze Zahl als Ergebnis hat, wenn sie entweder durch sich selbst oder durch 1 geteilt wird. <br>
                                Wofür?
                                <ol>
                                    <li>Es hilft bei der Berechnung von Brüchen.</li>
                                    <li>Man kann dadurch ermitteln, ob ein Bruch gekürzt werden kann.</li>
                                </ol>
                            </details>
                            <details>
                                <summary>Primzahlenliste:</summary>
                                <h3>Beschreibung:</h3>
                                Eine Liste aller Primzahlen <br>
                                Erklärung siehe Primzahlenkontolle
                            </details>
                            <br>
                            <div><h4>So funktioniert es:</h4></div>
                            <ul>
                                <li>Gib in jedes Eingabefeld eine ganze Zahl ein. (Wenn du Primzahlenkontolle benutzt, reicht eine Zahl im oberen Eingabefeld - nur diese wird bei der Primzahlenkontolle ausgewertet) </li>
                                <li>Anschließend drückst du auf einen der Buttons und du bekommst das Ergebnis im Ausgabefeld unter dem Strich angezeigt.</li>
                                <li>Wenn du die Liste der Primzahlen wählst, bekommst du außerdem die Information, wie viele Elemente im ensprechenden Wertebreich vorhanden sind.</li>
                                <li>Mit dem Button "Alles löschen" werden alle deine Eingaben sowie die Ausgaben gelöscht!</li>
                            </ul>
                            </div>
                            <!-- Advices -->
                                <div class="calcOperation">
                                    <h3>Berechnung</h3>
                                    <label for="firstNumber">Erste Zahl:</label><br>
                                    <input type="number" id="firstNumber"><br>
                                    <label for="secondNumber">Zweite Zahl:</label><br>
                                    <input type="number" id="secondNumber"><br>
                                    <div class="buttons">
                                        <button id="buttonLCM" onclick="leastCommonMultiple()">KGV</button>
                                        <button id="buttonGCD" onclick="greatestCommonDivisor()">GGT</button>
                                        <button id="buttonPN" onclick="primNumber()">Primzahl</button>
                                        <button id="buttonPNL" onclick="listOfPrims()">Primzahlenliste</button>
                                        <button id="buttonReset" onclick="formResetFraction()" disabled>Alles löschen</button><br>
                                        <button onclick="multipleNum()">Vielfachliste</button>
                                    </div>
                                    ------------------------------------------------------------------------------------ <br>
                                    <label for="output" id="labelOutput">Ausgabe:</label><br>
                                    <input type="text" id="outputCalc" readonly><br>
                                    <textarea id="primList" readonly></textarea>
                                </div>
                            </details>
                            <!-- Calculation -->
                            <details class="fractionCalculation">
                                <summary>Berechnung</summary>
                                Hier kannst du Brüche berechnen lassen:
                                <h4>So funktioniert es:</h4>
                                <ul>
                                    <li>Gib in jedes Eingabefeld eine ganze Zahl ein. </li>
                                    <li>Drücke anschließend auf einen Rechenoperator (+,-,*,/).</li>
                                    <li>Die Lösung wird in die Ausgabefelder rechts vom Gleichheitszeichen eingetragen</li>
                                    <li>Außerdem wird der Lösungsweg in einem Textfeld unterhalb der Eingabefelder ausgegeben.</li>
                                    <li>Sollte das Ergebnis eine ganze Zahl sein, so wird dies in einem zusätzlichen Ausgabefeld angezeigt.</li>
                                    <li>Mit dem Button "Alles löschen" werden alle deine Eingaben sowie die Ausgaben gelöscht!</li>
                                </ul>
                                <div class="calcFraction">
                                    <h3>Mit Brüchen rechnen:</h3>
                                    
                                    <label >Zähler</label>
                                    <input type="number" id="numerator1">/
                                    <label >Nenner</label>
                                    <input type="number" id="dominator1">
                                    <select class="operationFraction" name="Rechenoperator">
                                        Rechenoperator
                                        <option value="+">+</option>
                                        <option value="-">-</option>
                                        <option value="*">*</option>
                                        <option value="/">/</option>
                                    </select>
                                    <label >Zähler</label>
                                    <input type="number" id="numerator2">/
                                    <label >Nenner</label>
                                    <input type="number" id="dominator2">=
                                    <label >Zähler</label>
                                    <input type="number" id="numerator3" readonly>/
                                    <label >Nenner</label>
                                    <input type="number" id="dominator3" readonly>
                                    <label id="intNum">Ganze Zahl</label>
                                    <input type="number" id="inputIntNum" readonly>
                                    <br>
                                    <textarea class="calcWayF" readonly></textarea>
                                    <button onclick="calcFraction()">Berechnen</button>
                                    <button onclick="formReset2()">Alles löschen</button>
                                </div>
                                </div>
                            </details>
                    ';
                }
                if($_GET['page']== "equation"){
                    echo '
                    
                    <div class="calculation">
                        <h2>'.$description.'</h2>
                        Willkommen <br>
                        Hier kannst du dir quadratische und einfache Gleichungen lösen lassen.
                        <div class="calcEquation">
                        <details class="calcDetails">
                            <summary>Quadratische Gleichungen</summary>
                        <!-- quadratic equations -->
                        <div class="calcDescription">
                            <!-- Manual -->
                            <h4>So funktioniert es:</h4>
                            Die Gleichung hat die allgemeine Form: <br>
                            ax²+bx+c=d <br>
                            Gib die Werte für a, b, c und d in die entsprechenden Felder ein. <br>
                            Brüche bitte als Dezimalzahlen eingeben. <br>
                            Ein paaar Hinweise:
                            <ul>
                                <li>
                            Wenn a oder b nicht angegeben sind, aber x² und/oder x existieren sind a=1 und/oder b=1</li>
                            <li>Wenn außer ax² und bx vor dem Gleichheitszeichen nicht weiter angegeben ist, ist c=0</li>
                        </ul>
                        Sobald alle Zahlen eingegeben sind, klicke auf "Gleichung lösen" und du erhälst in der zweiten Zeile die Lösungen. <br>
                        In der dritten Zeile siehst du den Lösungsweg. <br>
                        Dezimalzahlen sind auf 2 Stellen gerundet. <br>
                        Du willst mehr Gleichungen lösen? - Drücke auf "Alles löschen" und die Eingabefelder werden geleert. <br>
                        Es gibt auch eine Probe, um die Werte zu überprüfen. <br><br>
                        <b>Bitte beachten!</b>
                        <ul>
                            <li>Probe 2 ist nur gültig, wenn x2 vorhanden! (also, r>0)</li>
                        <li>Das Ergebnis weicht in der Regel leicht ab, da bei Dezimalzahlen oft mit gerundeten Werten gerechnet wird!   </li>
                        </ul>
                        
                            
                        </div>
                    <!-- Input mask -->
                        <div class="calcOperation">
                            <label for="firstNumberEq">a</label>
                            <input type="text" id="firstNumberEq">x² +
                            <label for="secondNumberEq">b</label>
                            <input type="text" id="secondNumberEq">x +
                            <label for="thirdNumberEq">c</label>
                            <input type="text" id="thirdNumberEq">=
                            <label for="fourthNumberEq">d</label>
                            <input type="text" id="fourthNumberEq">
                            <!-- Buttons -->
                            <!-- To Submit -->
                            <button id="submitButton" onclick="equation()">Gleichung lösen</button>
                            <!-- To Reset inputs -->
                            <button id="buttonResetEq" onclick="formReset()" disabled >Alles löschen</button><br>
                            <!-- Results -->
                            <label id="result1">Lösung 1:</label>
                            <input type="text" id="inputResult1" readonly>
                            <label id="result2">Lösung 2:</label>
                            <input type="text" id="inputResult2" readonly><br>
                            <div id="results">
                            <!-- Calculation Way -->
                            <textarea id="calcWay"></textarea>
                            <!-- Check -->
                            <textarea id="areaCheck"></textarea>
                        </div>
                        </div>
                    </details>
                    
                        <details class="calcDetails">
                            <summary>Einfache Gleichungen</summary>
                            <!-- Simple Equation -->
                        <div class="calcDescription">
                            <!-- Manual -->
                            <h4>So funktionierts:</h4>
                            Bitte bringe die Gleichung in die Form<br>a + bx = c<br>trage hier die Werte von a, b und c in die entsprechenden Felder ein<br>
                            Hinweis:
                            <ul>
                            <li>Wenn vor dem x keine Zahl steht ist b=1</li>
                            <li>Wenn x fehlt ist b=0</li>
                            

                            </ul>
                            Drücke auf "Gleichung lösen"<br>
                            Anschließend wird in der Zeile darunter der Werte für x angezeigt <br>
                            Es gibt auch eine Probe, um die Lösung zu bestätigen.<br>
                            Bei Dezimalzahlen kann es hierbei zu minimalen Rundungsfehlern kommen.
                        </div>
                        <div class="calcOperation">
                            <!-- Input mask -->
                            <input type="number" class="inputEqA" placeholder="a">
                                +
                                <input type="number" class="inputEqB" placeholder="b">
                                x=
                                <input type="number" class="inputEqC" placeholder="c">
                                <!-- Button -->
                                <button onclick="simpleeq()">Gleichung lösen</button>
                                <br>
                                <!-- Result -->
                                <span class= "eqResult" >
                                </span>
                                <br>
                                <!-- Calculation Way -->
                                <textarea name="" id="howToEq" readonly></textarea>
                                <!-- Check -->
                                <textarea id="areaSimpleCheck"></textarea>

                        </div>
                        </details>
                    </div>
                    
                </div>
                    ';                }
                if($_GET['page']== "schoolwork"){
                    echo '
                    <div class="schoolwork">
                    <h2>'.$description.'</h2>
                    Willkommen <br>
        Hier kannst du dir Aufgaben zufällig erstellen lassen, kontrollieren lassen und eine Auswertung der Resultate vornehmen.
        <details class="tasksCreate ">
            <!-- Task Creation -->
            <summary>Aufgaben erstellen</summary>
            <!-- Manual -->
            <div class="taskDescription ">
                <h4>So funktioniert es:</h4>
                <ul>
                    <li>Gib zuerst den Startwert ein (das ist der kleinste Wert mit dem du rechnen willst)</li>
                    <li>Gib dann den Endwert ein(das ist der höchste Wert mit dem du rechnen willst)</li>
                    <li>Gib als drittes die Anzahl der Aufgaben an</li>
                    <li>Wähle einen Rechenoperator aus (bei zufällig wird der Rechenoperator für jede Aufgabe zufällig gewählt)</li>
                    <li>Gib an, ob die Aufgaben für Grundschulkinder sind; wenn ja, wird darauf geachtet, dass <ol class="taskDescriptionOl">
                        <li>keine negativen Zahlen als Ergebnis vorkommen</li>
                        <li>keine Dezimalzahlen als Ergebnis vorkommen</li>
                        <li>keine 0 als Werte vorkommen</li>
                    </ol> </li>
                    <li>Drücke anschließend auf "Aufgaben erstellen"</li>
                    <li>Jetzt wird eine Liste von Aufgaben erstellt</li>
                    <li>Der Button "Reset" setzt die Eingaben zurück und löscht die Liste der Aufgaben</li>
                    <li>Mit dem Button "Drucken" kannst du dir die Aufgaben mit einem Drucker ausdrucken lassen</li>
                </ul>
            </div>
            <div class="creation">
        <!-- Input mask -->
        <label >Startwert</label>
        <input type="number" class="startValueSW" value="1"><br>
        <label >Endwert</label>
        <input type="number" class="endValueSW" value="10"><br>
        <label >Anzahl der Aufgaben</label>
        <input type="number" class="numberOfTasksSW" value="10"><br>
        <label >Rechenoperator</label>
        <select class="operationTasks" name="Rechenoperator">
            Rechenoperator
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="z">zufällig</option>
        </select><br>
        <label >Grundschule?</label>
        <input type="checkbox" class="checkBasic" checked="false"><br>
        <!-- Buttons -->
        <button onclick="randomTasks()" class="buttonConfirmSW">Aufgaben erstellen</button><br>
        <button onclick="resetFormSW()" class="buttonResetT" disabled>Reset</button><br>
        <button onclick="printTasks()"class="btnPrint" disabled>Drucken</button>
        <ol class="taskList">
            <h3 class="taskHead">Bitte löse die folgenden Aufgaben:</h3>
        </ol>
    </div>
    </details>
   
    <!-- Check Result -->
        <details class="resultCheck">
            <summary>Aufgabe kontrollieren</summary>
            <div>
                <h4>So funktioniert es:</h4>
                <ul>
                    <li>Gib die erste Zahl in das erste Feld ein</li>
                    <li>Gib die zweite Zahl in das zweite Feld ein</li>
                    <li>Gib das Ergebnis in das dritte Feld ein</li>
                    <li>Wähle einen Operator</li>
                    <li>Drücke auf den Button "Kontrolle"</li>
                    <li>Anschließend wird dir angezeigt, ob die Lösung der Aufgabe richtig oder falsch ist</li>
                    <li>Wenn die Lösung falsch ist, wird die richtige Lösung angezeigt. </li>
                </ul>
        <input type="number" class="firstNumberTask">
        <select name="Operation" class="calcOperationTask">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" class="secondNumberTask">
        <label>=</label>
        <input type="number" class="inputResultCheck">
        <button onclick="checkResult()">Kontrolle</button>
    </div>
    </details>
    <!-- Evaluation -->
        <details class="resultsWork">
            <summary>Resultate auswerten</summary>
            <div>
                <h4>So funktioniert es:</h4>
                <ul>
                    <li>Gib zuerst die Anzahl der Aufgaben ein</li>
                    <li>Gib anschließend die Anzahl der korrekt gelösten Aufgaben ein</li>
                    <li>Klicke auf "Auswerten"</li>
                    <li>Die Anzahl der Fehler wird ausgegeben, wenn Fehler gemacht wurden.</li>
                    <li>Die % der richtigen Antworten werden ebenfalls angezeigt.</li>
                    <li>Die Note basiert auf den Punkten</li>
                </ul>
        <label>Anzahl der Aufgaben</label>
        <input type="number" class="inputAll">
        <label >Anzahl der Korrekten Antworten</label>
        <input type="number" class="inputRight">
        <label class="labelErrors">Es wurden  
        <span class="inputWrong"></span> Fehler gemacht.
        </label>
        <span> Das sind </span>
        
        <label class="labelPoints">XXX</label>
        <label>% richtige Antworten - Das ergibt die </label>
        <label>Note:</label>
        <label class="grade">Note()</label>
        <button onclick="evaluationSW()">Auswerten</button>
        <label class="errorMessage"></label>
        
    
    
    </div>
    
        </details>
        <!-- Create Quadratic Equation-->
        <details class="createEquation">
            <summary>Quadratische Gleichung und Brüche erzeugen</summary>
            <div class="createEqDescription">
                <h2>Gleichungen und Brüche erzeugen</h2>
                Hier könnt ihr Gleichungen und Brüche zufällig erzeugen lassen
                <h4>So funktioniert es:</h4>
                <ul>
                    <li>Trage den Wertebereich ein, indem du den Anfangswert und den Endwert in die entsprechenden Felder einträgst</li>
                    <li>Drücke auf "Erstellen" und die Gleichung wird erstellt und unter den Eingabefeldern angezeigt</li>
                </ul>
            </div>
        <div class="createEqCalc">
            <label >Anfangswert:</label>
            <input type="number" class="minValueEq">
            <label >Höchstwert:</label>
            <input type="number" class="maxValueEq">
            <button onclick="createEquation()">Erstellen</button><br>
            <label >Auswahl:</label>
            <select  class="choice">
                <option value="Brüche">Brüche</option>
                <option value="Gleichungen">Gleichungen</option>
            </select>
            <label class="resultEq"></label>
        </details>
        </div>
                    ';

                }
                if($_GET['page'] != "home" && $_GET['page'] != "fraction" && $_GET['page'] != "equation" && $_GET['page'] != "schoolwork"){
                echo '<h2 class="side404">'.$description.'</h2>';
                
                }
                
            ?>
        </div>
    </div>
     <div class="footer">
        &#169 2025 Chris Web Development
        <br>
        <a href="#">Impressum</a> |
        <a href="#">Datenschutz</a>
    </div>
</body>
</html>