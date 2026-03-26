import { Topic, Question } from './types';
import MathRenderer from './components/MathRenderer';

export const TOPICS: Topic[] = [
  {
    id: 'math-thinking',
    title: 'Mathematical Thinking',
    subtitle: 'The Engine of Logic',
    icon: 'Brain',
    content: `
### 1. The Real-World Benefits of Mathematics
Mathematics is far more than just a school subject; it is a vital life skill that improves how your brain works and how you navigate the world.

* **Brain Power**: Learning math strengthens the brain regions used for attention and decision-making. High math skills are linked to higher "grey matter" volume in the brain.
* **Financial Freedom**: Math is the primary tool for balancing a budget, calculating interest on loans, and avoiding debt.
* **Daily Life Skills**:
    * **Cooking**: Using fractions to double recipes or swap measuring tools (e.g., knowing 1/2 cup = 8 tablespoons).
    * **Shopping**: Calculating percentages and discounts quickly to find the best deals.
    * **Time Management**: Using fractions to read analog clocks and stay on schedule.
* **Career Success**: Virtually every job—from factory work and retail to science and engineering—requires math for interpreting paychecks, managing inventory, or using software.
* **Understanding Nature**: Math is the "Universal Language." We see it in the hexagonal honeycombs of bees, the Fibonacci spirals in seashells, and the value of **π (Pi)** in the way rivers bend.





### 2. Steps for Mathematical Problem Solving
Mathematical thinking is a structured process. When faced with a challenge, follow these four steps:

#### Step A: Break the Task Down (Decomposition)
Big problems feel scary because they are "insurmountable." To fix this, break them into tiny, manageable pieces:
1. **The Big Picture**: Know what the final result should look like.
2. **Logical Order**: Decide what needs to happen first, second, and third.
3. **Timeline**: Set deadlines for each small piece to stay focused.
4. **The Plan**: Schedule specific times to work and stick to it.



#### Step B: Identify Assumptions (Modelling)
In the real world, we use **Mathematical Models** to simplify reality. To make a model work, we must make "Assumptions."
* **Example**: When calculating how a ball falls, we might "assume" air resistance is zero to make the math easier. 
* **The Rule**: Assumptions are great for simplifying, but if they are wrong (like ignoring wind when dropping a feather), your model will fail.

#### Step C: Look for Patterns and Connections
Patterns are regularities we can see, hear, or feel.
* **Repeating Patterns**: Rhythms or colors that repeat (ABAB).
* **Growing Patterns**: Things that increase by a set amount (like stairs adding one step at a time).
* **Generalization**: Realizing that a pattern in music (clap-stomp) follows the same "rule" as a pattern in colors (red-blue). This is the first step toward **Algebra**.



#### Step D: Generate Examples
Apply your math to every part of your life to stay sharp:
* **Home Decorating**: Calculate the **Area** of a wall to know how much paint to buy.
* **Sports**: Use **Geometry** to find the best angle to throw a ball or run a track.
* **Travel**: Calculate distance, time, and fuel costs before you leave.

### Summary
Mathematical thinking is about **simplifying the complex**. By breaking tasks down, identifying what is important, and finding patterns, you can make sense of a world that often feels confusing.
`,
    questions: [
      {
        id: 'mt-1',
        text: "Which pillar of computational thinking involves ignoring irrelevant details to focus on the core problem?",
        options: ["Decomposition", "Pattern Recognition", "Abstraction", "Algorithmic Thinking"],
        correctAnswer: 2,
        explanation: "Abstraction is the process of filtering out unnecessary details so that the main features can be focused on."
      },
      {
        id: 'mt-2',
        text: "If you are designing a complex software system and you decide to work on the database layer before the user interface, which principle are you applying?",
        options: ["Abstraction", "Decomposition", "Evaluation", "Generalization"],
        correctAnswer: 1,
        explanation: "Decomposition is breaking a complex problem into smaller, more manageable parts."
      },
      {
        id: 'mt-3',
        text: "A programmer notices that they are writing the same code to calculate taxes in three different places and decides to create a 'calculateTax' function. This is an example of:",
        options: ["Decomposition", "Pattern Recognition", "Algorithmic Thinking", "Hardcoding"],
        correctAnswer: 1,
        explanation: "Pattern recognition allows you to identify repetitive tasks and simplify them."
      },
      {
        id: 'mt-4',
        text: "What is the primary goal of Algorithmic Thinking?",
        options: ["To write code as fast as possible", "To create a step-by-step set of instructions to solve a problem", "To make the UI look better", "To reduce the number of variables used"],
        correctAnswer: 1,
        explanation: "Algorithmic thinking is about creating a logical, step-by-step process for solving a problem."
      },
      {
        id: 'mt-5',
        text: "In the context of problem solving, what does 'DRY' stand for?",
        options: ["Data Retrieval Yield", "Don't Repeat Yourself", "Digital Resource Yard", "Dynamic Response Yield"],
        correctAnswer: 1,
        explanation: "DRY stands for 'Don't Repeat Yourself', a core principle of efficient software development."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `mt-extra-${i}`,
        text: `Scenario ${i + 6}: You are optimizing a search algorithm. Which thinking skill helps you identify that the data is already sorted?`,
        options: ["Decomposition", "Pattern Recognition", "Abstraction", "Algorithmic Thinking"],
        correctAnswer: 1,
        explanation: "Recognizing that data is sorted is a form of pattern recognition that can lead to more efficient algorithms like Binary Search."
      }))
    ]
  },
  {
    id: 'size-magnitude',
    title: 'Size & Magnitude',
    subtitle: 'Making Sense of Numbers',
    icon: 'Microscope',
    content: `
In science and engineering, we deal with scales ranging from the subatomic (tiny) to the galactic (huge). Because writing out fifty zeros is difficult, we use shortcuts to keep our measurements precise.

### 1. Scientific Notation (The "Power" Shortcut)
Scientific notation is a way to write very large or very small numbers using powers of 10.

* **The Format**: **N × 10ⁿ**
    * **N** is a number between 1 and 10.
    * **n** is the "exponent" (how many places the decimal point moved).
* **Large Numbers**: 5,000,000 becomes **5 × 10⁶**. (The 6 means we moved the decimal 6 places right).
* **Small Numbers**: 0.0004 becomes **4 × 10⁻⁴**. (The -4 means the number is a tiny decimal).



[Image of scientific notation parts labeled with coefficient and exponent]


### 2. Metric Prefixes (The "Nicknames")
Instead of saying "one billion," scientists use prefixes. Here is how they break down:

* **Tera (T)**: 10¹² (Trillion) — Analogy: 1,000 Gigabytes
* **Giga (G)**: 10⁹ (Billion) — Analogy: Laptop RAM size
* **Mega (M)**: 10⁶ (Million) — Analogy: 1 Megapixel
* **Kilo (k)**: 10³ (Thousand) — Analogy: 10 City blocks
* **Base (—)**: 10⁰ (One) — The standard unit (meter, liter, gram)
* **Milli (m)**: 10⁻³ (Thousandth) — Analogy: Credit card thickness
* **Micro (µ)**: 10⁻⁶ (Millionth) — Analogy: Human cell size
* **Nano (n)**: 10⁻⁹ (Billionth) — Analogy: DNA strand width
* **Pico (p)**: 10⁻¹² (Trillionth) — Analogy: Distance between atoms



### 3. Temperature: Measuring Heat
We use different scales to measure how fast molecules are moving.

* **Celsius (°C)**: The global standard. Water freezes at **0°** and boils at **100°**.
* **Fahrenheit (°F)**: Used mostly in the US. Water freezes at **32°** and boils at **212°**.
* **The "Twin" Point**: At **-40°**, both Celsius and Fahrenheit are exactly the same.
* **Conversion Formula**: To turn Celsius into Fahrenheit:
    **F = (C × 1.8) + 32**

### 4. Unit Conversions (The "Jump" Rule)
To move between units, you either multiply or divide by the "scale factor."

#### Length (The Meter)
* **km to m**: Multiply by 1,000 (1 km = 1,000m)
* **m to cm**: Multiply by 100 (1m = 100cm)
* **cm to mm**: Multiply by 10 (1cm = 10mm)
* **inches to cm**: Multiply by 2.54 (1 in = 2.54cm)

#### Mass (The Gram)
* **kg to g**: Multiply by 1,000 (1 kg = 1,000g)
* **g to mg**: Multiply by 1,000 (1 g = 1,000mg)
* **lb to kg**: Multiply by 0.45 (1 lb ≈ 0.45kg)

#### Volume (The Liter)
* **L to mL**: Multiply by 1,000 (1 L = 1,000mL)
* **Gallon to L**: Multiply by 3.78 (1 gal ≈ 3.78L)



### 5. Beginner's Conversion Trick
If you are moving to a **smaller** unit (like Kilometers to Meters), the number gets **bigger** (Multiply). If you are moving to a **larger** unit (like Grams to Kilograms), the number gets **smaller** (Divide). 

**Think of it this way: You need more "inches" to cover the same distance as one "foot"!**
`,
    questions: [
      {
        id: 'sm-1',
        text: "Convert 0.000000007 into scientific notation.",
        options: ["7 x 10^-8", "7 x 10^-9", "7 x 10^9", "0.7 x 10^-8"],
        correctAnswer: 1,
        explanation: "Moving the decimal 9 places to the right gives 7 x 10^-9."
      },
      {
        id: 'sm-2',
        text: "What is the value of the 'Pico' prefix?",
        options: ["10^-9", "10^-12", "10^-15", "10^-6"],
        correctAnswer: 1,
        explanation: "Pico represents 10^-12 (one trillionth)."
      },
      {
        id: 'sm-3',
        text: "At what temperature do the Celsius and Fahrenheit scales intersect?",
        options: ["0°", "32°", "-40°", "100°"],
        correctAnswer: 2,
        explanation: "At -40 degrees, both scales show the same numerical value."
      },
      {
        id: 'sm-4',
        text: "If a hard drive has a capacity of 2 Terabytes, how many Gigabytes is that approximately?",
        options: ["200 GB", "2,000 GB", "20,000 GB", "2,000,000 GB"],
        correctAnswer: 1,
        explanation: "1 Tera is 1,000 Giga (in standard decimal SI units)."
      },
      {
        id: 'sm-5',
        text: "Convert 25°C to Fahrenheit using the formula F = (C * 1.8) + 32.",
        options: ["77°F", "82°F", "68°F", "72°F"],
        correctAnswer: 0,
        explanation: "(25 * 1.8) + 32 = 45 + 32 = 77."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `sm-extra-${i}`,
        text: `Calculate the magnitude difference between Mega (10^6) and Nano (10^-9).`,
        options: ["10^3", "10^15", "10^9", "10^12"],
        correctAnswer: 1,
        explanation: "The difference in powers is 6 - (-9) = 15, so the factor is 10^15."
      }))
    ]
  },
  {
    id: 'number-systems',
    title: 'Number Systems',
    subtitle: 'Fractions & Precision',
    icon: 'Layers',
    content: `
In the world of math and coding, not all numbers are created equal. Understanding the difference between "Rational" and "Irrational" numbers helps you decide whether to use an **Integer**, a **Float**, or a **Double** in your code.

### 1. Rational Numbers (The "Predictable" Ones)
A Rational number is any number that can be written as a simple fraction (**p/q**). In your computer, these are usually easy to store because they have an "end" or a repeating pattern.

* **Terminating Decimals**: These stop after a few digits.
    * Example: 1/2 = **0.5**
    * Example: 1/8 = **0.125**
* **Repeating Decimals**: These go on forever, but they follow a strict loop.
    * Example: 1/3 = **0.333...**
    * Example: 1/7 = **0.142857142857...**



### 2. Irrational Numbers (The "Chaos" Numbers)
Irrational numbers are the rebels of the math world. They cannot be written as fractions, and their decimals go on forever **without ever repeating a pattern**.

* **π (Pi)**: 3.14159... (Used for circles and rotations).
* **√2 (Square Root of 2)**: 1.41421... (Used for diagonal distances).
* **e (Euler's Number)**: 2.71828... (Used for growth and physics).

**Coding Tip**: Since a computer has limited memory, it can never store the *entire* value of Pi. It always has to "cut it off" eventually, which leads to tiny hidden errors.



### 3. The "Binary Trap" and Rounding Errors
Here is the most important thing for a programmer to know: **Computers think in Binary (0s and 1s).** Because of this, some simple decimal numbers like **0.1** are actually "Irrational" to a computer! In binary, 0.1 becomes a repeating pattern that never ends. 
* This is why in JavaScript, \`0.1 + 0.2\` sometimes equals \`0.30000000000000004\`.



### 4. Why Precision is Life or Death
Small rounding errors might not matter in a calculator app, but they are vital in engineering:
* **The Patriot Missile Failure (1991)**: A computer clock tracked time by adding 0.1 seconds repeatedly. Because of the tiny binary rounding error mentioned above, the clock drifted by **0.34 seconds**. This small gap caused the system to miss an incoming missile, leading to a tragedy. 

### 5. Conversion Cheat Sheet
If you need to move between formats, follow these simple steps:
* **Fraction to Decimal**: Just divide! For 3/4, do 3 ÷ 4 = **0.75**.
* **Decimal to Fraction**: Use place value. For 0.75, it’s 75 over 100. Then simplify: **75/100 = 3/4**.

### Summary for Beginners
* **Rational**: Can be a fraction. Predictable and easy for computers.
* **Irrational**: Cannot be a fraction. Hard for computers to store perfectly.
* **Precision**: Always remember that computers "guess" slightly when dealing with decimals!
`,
    questions: [
      {
        id: 'ns-1',
        text: "Which of the following is an irrational number?",
        options: ["0.333...", "22/7", "Square root of 2", "0.123123..."],
        correctAnswer: 2,
        explanation: "The square root of 2 cannot be expressed as a simple fraction and has a non-repeating decimal."
      },
      {
        id: 'ns-2',
        text: "What is the decimal representation of the fraction 5/8?",
        options: ["0.625", "0.58", "0.675", "0.525"],
        correctAnswer: 0,
        explanation: "5 divided by 8 equals 0.625."
      },
      {
        id: 'ns-3',
        text: "Why do floating-point rounding errors occur in computers?",
        options: ["Because computers are slow", "Because some decimal numbers cannot be represented exactly in binary", "Because of hardware heat", "Because of the operating system"],
        correctAnswer: 1,
        explanation: "Binary representation of certain decimals (like 0.1) results in infinite repeating sequences, which must be truncated."
      },
      {
        id: 'ns-4',
        text: "Convert 0.85 into its simplest fraction form.",
        options: ["85/100", "17/20", "4/5", "19/20"],
        correctAnswer: 1,
        explanation: "0.85 = 85/100. Dividing both by 5 gives 17/20."
      },
      {
        id: 'ns-5',
        text: "A 'Rational' number is defined as any number that can be written as:",
        options: ["A whole number", "A decimal that never ends", "A ratio of two integers", "A square root of a prime"],
        correctAnswer: 2,
        explanation: "Rational numbers are ratios (fractions) of two integers."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `ns-extra-${i}`,
        text: `Is the decimal 0.${i}${i}${i}... a rational or irrational number?`,
        options: ["Rational", "Irrational", "Integer", "Imaginary"],
        correctAnswer: 0,
        explanation: "Any repeating decimal can be expressed as a fraction, making it rational."
      }))
    ]
  },
  {
    id: 'cartesian',
    title: 'Cartesian Coordinates',
    subtitle: 'Mapping the World',
    icon: 'Map',
    content: `
The Cartesian Coordinate System, named after René Descartes, allows us to translate geometric shapes into algebraic equations. In computing, this system is the literal "map" for every pixel on your screen and every object in a 3D game.

### 1. The Anatomy of the 2D Plane
A 2D plane is defined by two perpendicular number lines that intersect at a central point.

* **The Axes**: The **X-Axis** (Horizontal) represents the independent variable, while the **Y-Axis** (Vertical) typically represents the dependent variable.
* **The Origin (0, 0)**: The "Zero Point" from which all other positions are measured.
* **Quadrants**: The plane is split into four areas. Understanding these is vital for trigonometry:
    * **Quadrant I**: (+x, +y) - Top Right.
    * **Quadrant II**: (-x, +y) - Top Left.
    * **Quadrant III**: (-x, -y) - Bottom Left.
    * **Quadrant IV**: (+x, -y) - Bottom Right.



### 2. Plotting and Translation
Every point is an **Ordered Pair (x, y)**. The order is critical because (2, 5) is a completely different location than (5, 2).

* **Abscissa**: The formal name for the x-coordinate.
* **Ordinate**: The formal name for the y-coordinate.
* **In Computing**: Note that in many web technologies (like HTML Canvas or CSS), the **Y-axis is inverted**, where (0,0) is the top-left corner and Y increases as you move *down*.

### 3. Why It Matters in Engineering
Cartesian coordinates allow us to perform **Linear Transformations**. If you want to move a character in a game, you aren't "moving" them; you are adding a value to every x, y, and z coordinate in their model. This is the basis of all computer animation.
`,
    questions: [
      {
        id: 'cc-1',
        text: "In which quadrant would the point (-5, 3) be located?",
        options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        correctAnswer: 1,
        explanation: "Quadrant II has negative X and positive Y values."
      },
      {
        id: 'cc-2',
        text: "What is the distance between the points (0,0) and (3,4)?",
        options: ["5 units", "7 units", "25 units", "1 unit"],
        correctAnswer: 0,
        explanation: "The square root of (3² + 4²) is the square root of (9 + 16), which is 5."
      },
      {
        id: 'cc-3',
        text: "The point where the X and Y axes intersect is called the:",
        options: ["Center", "Vertex", "Origin", "Pivot"],
        correctAnswer: 2,
        explanation: "The origin is the starting point (0,0)."
      },
      {
        id: 'cc-4',
        text: "If you move 3 units left and 2 units down from the origin, your coordinates are:",
        options: ["(3, 2)", "(-3, 2)", "(3, -2)", "(-3, -2)"],
        correctAnswer: 3,
        explanation: "Left is negative X, down is negative Y."
      },
      {
        id: 'cc-5',
        text: "In a 3D coordinate system, what is the name of the third axis?",
        options: ["W-axis", "Z-axis", "V-axis", "D-axis"],
        correctAnswer: 1,
        explanation: "3D systems use X, Y, and Z axes."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `cc-extra-${i}`,
        text: `Find the midpoint between (0,0) and (${i * 2}, ${i * 4}).`,
        options: [`(${i}, ${i * 2})`, `(${i * 2}, ${i * 4})`, `(0, 0)`, `(${i / 2}, ${i})`],
        correctAnswer: 0,
        explanation: "The midpoint formula is ((x1+x2)/2, (y1+y2)/2)."
      }))
    ]
  },
  {
    id: 'pythagoras',
    title: 'Pythagoras Theorem',
    subtitle: 'The Distance Formula',
    icon: 'Ruler',
    content: `
The Pythagorean Theorem is a famous rule that helps us find the distance between two points. It only works for **Right-Angled Triangles** (triangles that have one perfectly square 90° corner).

### 1. The Simple Rule: a² + b² = c²
Imagine a triangle with three sides:
* **a and b (The Legs)**: The two sides that make the "L" shape.
* **c (The Hypotenuse)**: The long, slanted side that connects them.

The theorem says that if you square the two shorter sides and add them together, you get the square of the long side.



### 2. Why do we "Square" the numbers?
In math, "squaring" a number (like 3²) just means multiplying it by itself (3 × 3 = 9).
Geometrically, it represents an actual **square shape**. The theorem literally means: 
*"The area of the two smaller squares added together perfectly fits into the big slanted square."*



### 3. Using it in Real Life (The Ladder Example)
Imagine you have a **5-meter ladder** leaning against a wall. If the bottom of the ladder is **3 meters** away from the wall, how high up does it reach?

1. **Identify the sides**: The ladder is the long side (**c = 5**). The distance from the wall is one leg (**b = 3**). We need to find the height (**a**).
2. **Setup the math**: a² + 3² = 5²
3. **Do the multiplication**: a² + 9 = 25
4. **Subtract**: a² = 16
5. **Find the root**: What number times itself equals 16? **4**.
*The ladder reaches **4 meters** high!*

### 4. Why Programmers Use This
You don't need to be an architect to use this! Developers use it every day for:
* **Distance**: Checking how far a player is from a treasure chest.
* **Touch Screens**: Calculating exactly where your finger tapped.
* **Graphics**: Drawing smooth lines and shapes on a screen.



### 5. Summary Tip
* If you know the two short sides, **add** them to find the long side.
* If you know the long side and one short side, **subtract** them to find the missing side.
`,
    questions: [
      {
        id: 'pt-1',
        text: "In the formula a² + b² = c², which letter represents the hypotenuse?",
        options: ["a", "b", "c", "Any of them"],
        correctAnswer: 2,
        explanation: "'c' always represents the longest side (hypotenuse) in this standard notation."
      },
      {
        id: 'pt-2',
        text: "Which of the following sets of numbers is a 'Pythagorean Triple'?",
        options: ["1, 2, 3", "3, 4, 5", "5, 10, 15", "2, 2, 4"],
        correctAnswer: 1,
        explanation: "3² + 4² = 5² (9 + 16 = 25)."
      },
      {
        id: 'pt-3',
        text: "If a right triangle has sides of length 6 and 8, what is the length of the hypotenuse?",
        options: ["10", "14", "100", "12"],
        correctAnswer: 0,
        explanation: "6² + 8² = 36 + 64 = 100. The square root of 100 is 10."
      },
      {
        id: 'pt-4',
        text: "Pythagoras' Theorem only works for which type of triangle?",
        options: ["Equilateral", "Isosceles", "Right-angled", "Scalene"],
        correctAnswer: 2,
        explanation: "The theorem is specifically defined for triangles with a 90-degree angle."
      },
      {
        id: 'pt-5',
        text: "In C#, how would you calculate the square root of a number 'x'?",
        options: ["x.Sqrt()", "Math.Sqrt(x)", "Math.Power(x, 0.5)", "Both B and C"],
        correctAnswer: 3,
        explanation: "Math.Sqrt(x) is the standard method, but raising to the power of 0.5 is mathematically equivalent."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `pt-extra-${i}`,
        text: `If a = ${i + 5} and b = ${i + 12}, and they form a right triangle, what is c²?`,
        options: [`${Math.pow(i + 5, 2) + Math.pow(i + 12, 2)}`, `${i + 17}`, `${Math.pow(i + 17, 2)}`, "0"],
        correctAnswer: 0,
        explanation: "c² is simply the sum of the squares of the other two sides."
      }))
    ]
  },
  {
    id: 'precedence',
    title: 'Operator Precedence',
    subtitle: 'Laws of Execution',
    icon: 'ListOrdered',
    content: `
Computers are very fast, but they aren't "smart"—they follow a strict set of instructions. When you give a computer a long math problem like 2 + 3 × 5, it needs a rulebook to decide which part to do first. This rulebook is called **Operator Precedence**.

### 1. The Rulebook: PEMDAS / BODMAS
Most people learn this as an acronym. It tells the computer the "rank" of each math symbol:

1. **P**arentheses / **B**rackets **( )**: Always do what's inside the bubbles first.
2. **E**xponents / **O**rders **x²**: Handle powers and square roots next.
3. **M**ultiplication and **D**ivision **(× and ÷)**: These have equal rank.
4. **A**ddition and **S**ubtraction **(+ and -)**: These are the final step.



### 2. The "Left-to-Right" Tie-Breaker
A common mistake is thinking Multiplication *always* comes before Division. In reality, they are on the same team. If you see both in a row, you simply go from left to right, just like reading a book.

* **The Problem**: 10 ÷ 2 × 5
* **The Correct Way**: 10 ÷ 2 = 5, then 5 × 5 = **25**.
* **The Common Mistake**: If you did the multiplication first (2 × 5 = 10), you'd get 10 ÷ 10 = **1**. That's a bug!



### 3. Why This Matters in Coding
In programming, we often calculate things like a player's health or the price of a shopping cart. 

Imagine you are calculating a 10% discount:
\`let price = 100 - 20 * 0.10;\`

* **The Computer's Logic**: It sees the multiplication (\*) and does that first: 20 × 0.10 = 2. Then it subtracts: 100 - 2 = **98**.
* **Your Intent**: If you wanted to subtract the 20 first, you **must** use parentheses: \`(100 - 20) * 0.10 = 8\`.

### 4. Assignment: The Very Last Step
In a line of code like \`x = 5 + 2\`, the equals sign (**=**) actually has the **lowest** priority. The computer finishes all the math on the right side ($5 + 2 = 7$) before it finally "assigns" or saves that 7 into the variable **x**.

### 5. Beginner's Golden Rule
**"When in doubt, use parentheses."** Even if you know the rules, using brackets \`( )\` makes your code much easier for other humans to read. It tells everyone exactly which part of the math you want to happen first!
`,
    questions: [
      {
        id: 'op-1',
        text: "What is the result of 10 + 5 * 2?",
        options: ["30", "20", "25", "15"],
        correctAnswer: 1,
        explanation: "Multiplication (5*2=10) happens before addition (10+10=20)."
      },
      {
        id: 'op-2',
        text: "Evaluate the expression: (2 + 3) * 4 - 1",
        options: ["19", "11", "24", "15"],
        correctAnswer: 0,
        explanation: "Brackets first (5), then multiply (20), then subtract (19)."
      },
      {
        id: 'op-3',
        text: "What is the result of 12 / 3 / 2?",
        options: ["8", "2", "0.5", "6"],
        correctAnswer: 1,
        explanation: "Division is evaluated left-to-right: (12/3) = 4, then (4/2) = 2."
      },
      {
        id: 'op-4',
        text: "In PEMDAS, what does the 'E' stand for?",
        options: ["Evaluation", "Exponents", "Equations", "Elements"],
        correctAnswer: 1,
        explanation: "Exponents (powers) are the second priority."
      },
      {
        id: 'op-5',
        text: "Which operator has the lowest precedence in this list?",
        options: ["*", "/", "+", "("],
        correctAnswer: 2,
        explanation: "Addition and Subtraction are evaluated last."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `op-extra-${i}`,
        text: `Evaluate: ${i} + 10 / 2`,
        options: [`${i + 5}`, `${(i + 10) / 2}`, `${i + 20}`, "0"],
        correctAnswer: 0,
        explanation: "Division (10/2=5) happens before addition."
      }))
    ]
  },
  {
    id: 'int-division',
    title: 'Integer Division',
    subtitle: 'How Computers Chop',
    icon: 'Divide',
    content: `
In math class, 7 divided by 2 is always 3.5. But in many programming languages (like C#, Java, and C++), the answer is actually **3**. This is because of a rule called **Integer Division**.

### 1. The "Chop-Off" Rule (Truncation)
When a computer divides two whole numbers (Integers), it expects the result to be a whole number too. Instead of rounding to the nearest neighbor, it simply **truncates** the result.

* **Truncation** means the computer "chops off" everything after the decimal point and throws it away. 
* It doesn't matter if the decimal is .1 or .99; it all gets deleted.



**Examples of the "Chop":**
* **7 ÷ 2 = 3** (The .5 is deleted).
* **99 ÷ 100 = 0** (The .99 is deleted).
* **19 ÷ 10 = 1** (The .9 is deleted).

### 2. Why does the computer do this?
In lower-level languages, Integers and Decimals (called "Floats" or "Doubles") are stored in different types of "buckets" in the computer's memory. 
* An Integer bucket **cannot** hold a decimal point. 
* If you try to put 3.5 into an Integer bucket, the 0.5 simply spills over the side and is lost forever.



### 3. How to get the "Real" Answer
If you want the decimal (3.5), you have to tell the computer to use a "Decimal Bucket" from the very start. Usually, you do this by adding a **.0** to at least one of the numbers.

* **7.0 ÷ 2 = 3.5** (Success! Because 7.0 is a decimal, the computer uses decimal math).
* **7 ÷ 2.0 = 3.5** (Also works!)
* **(double)7 ÷ 2 = 3.5** (This is called "Casting"—you are forcing the 7 to act like a decimal).

### 4. Why This Causes "Bugs"
Imagine you are writing code for a store that gives a "Buy 3, Get 1 Free" discount. 

If you calculate a discount like this: \`let discount = (1 / 4) * price;\`
* The computer sees **1 ÷ 4** and says "That's 0." 
* It then multiplies **0 * price**, and the discount becomes **$0.00**. 
* The customer is unhappy, and your code looks broken, all because of one missing decimal point!

### 5. Summary for Beginners
* **Integer ÷ Integer** = Whole Number (Decimal is chopped off).
* **Decimal ÷ Integer** = Decimal Number (The correct math answer).
* **Integer ÷ Decimal** = Decimal Number (The correct math answer).

**When in doubt, add a .0 to your numbers to keep the precision!**
`,
    questions: [
      {
        id: 'id-1',
        text: "In C#, what is the result of the expression: 5 / 2?",
        options: ["2.5", "2", "3", "0"],
        correctAnswer: 1,
        explanation: "Integer division truncates the decimal, so 2.5 becomes 2."
      },
      {
        id: 'id-2',
        text: "What is the result of 1 / 4 in integer division?",
        options: ["0.25", "0", "1", "0.3"],
        correctAnswer: 1,
        explanation: "1/4 is 0.25, which truncates to 0."
      },
      {
        id: 'id-3',
        text: "How can you force a division to return a decimal in C#?",
        options: ["Use the % operator", "Cast one of the numbers to (double)", "Add .0 to one of the numbers", "Both B and C"],
        correctAnswer: 3,
        explanation: "Casting to double or using a literal double (like 5.0) forces floating-point division."
      },
      {
        id: 'id-4',
        text: "What is the result of -7 / 2 in C# integer division?",
        options: ["-3.5", "-3", "-4", "0"],
        correctAnswer: 1,
        explanation: "Truncation moves towards zero, so -3.5 becomes -3."
      },
      {
        id: 'id-5',
        text: "If 'int x = 10; int y = 3;', what is 'x / y'?",
        options: ["3.33", "3", "4", "0"],
        correctAnswer: 1,
        explanation: "10 / 3 = 3.333..., which truncates to 3."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `id-extra-${i}`,
        text: `Result of (${i * 10} + 5) / 10?`,
        options: [`${i}`, `${i}.5`, `${i + 1}`, "0"],
        correctAnswer: 0,
        explanation: "The .5 is truncated in integer division."
      }))
    ]
  },
  {
    id: 'modulus',
    title: 'Modulus Operator',
    subtitle: 'Finding Leftovers',
    icon: 'Percent',
    content: `
The Modulus operator (%) is the "secret weapon" of programming. It doesn't give you the answer to a division problem—it gives you the **leftovers**.

### 1. How it Works: The "Pizza Slice" Rule
Imagine you have **17 slices of pizza** and **4 hungry people**. 
* If you divide them equally, each person gets **4 full slices**.
* But 4 × 4 is only 16. That means there is **1 slice left** in the box.

In code, it looks like this:
* **Division (17 / 4)**: 4 (The number of slices each person got).
* **Modulus (17 % 4)**: 1 (The single slice left over).



### 2. The Most Common Use: Even vs. Odd
This is the fastest way to tell if a number is even or odd. 
* Any **Even** number divided by 2 has **0** left over. (e.g., 10 % 2 = 0)
* Any **Odd** number divided by 2 has **1** left over. (e.g., 11 % 2 = 1)

Developers use this to change the background color of every other row in a list or to make a character jump every second step.

### 3. Creating a "Loop" (The Clock Rule)
Modulus is perfect for making numbers "wrap around." Think of a 12-hour clock. After 12:00, it doesn't go to 13:00; it resets to 1:00.

If you have a value that keeps increasing, but you want it to stay between 0 and 9, you use **number % 10**. 
* 8 % 10 = 8
* 9 % 10 = 9
* 10 % 10 = **0** (The "reset" point)
* 11 % 10 = 1



### 4. Real-World Example: Time Formatting
If a video is **130 seconds** long, how do you show that in "Minutes and Seconds" format?

1. **Find the Minutes**: Use regular division. 130 / 60 = **2 minutes**.
2. **Find the Seconds**: Use Modulus. 130 % 60 = **10 seconds**.
* Result: **2:10**

### 5. The "Negative" Gotcha
In languages like C#, Java, and JavaScript, if the first number is negative, the remainder will be negative too.
* **-7 % 3 = -1**
Imagine you owe 7 dollars and try to pay it back in 3-dollar chunks. You pay two 3-dollar chunks (6 total), and you still owe **1** dollar.

### Summary for Beginners
* **Division (/)** = "How many full groups can I make?"
* **Modulus (%)** = "How many are left over after making those groups?"
`,
    questions: [
      {
        id: 'mo-1',
        text: "What is the result of 10 % 3?",
        options: ["3", "1", "0", "0.33"],
        correctAnswer: 1,
        explanation: "10 divided by 3 is 3 with a remainder of 1."
      },
      {
        id: 'mo-2',
        text: "Which expression correctly checks if a number 'n' is even?",
        options: ["n / 2 == 0", "n % 2 == 0", "n % 2 == 1", "n * 2 == 0"],
        correctAnswer: 1,
        explanation: "Even numbers have no remainder when divided by 2."
      },
      {
        id: 'mo-3',
        text: "What is 15 % 5?",
        options: ["3", "0", "5", "1"],
        correctAnswer: 1,
        explanation: "15 is perfectly divisible by 5, so the remainder is 0."
      },
      {
        id: 'mo-4',
        text: "If you want to keep a counter 'i' looping between 0 and 9, you should use:",
        options: ["i % 9", "i % 10", "i / 10", "i + 10"],
        correctAnswer: 1,
        explanation: "i % 10 will always return a value from 0 to 9."
      },
      {
        id: 'mo-5',
        text: "What is 2 % 5?",
        options: ["0", "2", "5", "0.4"],
        correctAnswer: 1,
        explanation: "5 goes into 2 zero times, with 2 left over."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `mo-extra-${i}`,
        text: `What is ${i + 20} % 7?`,
        options: [`${(i + 20) % 7}`, "0", "1", "2"],
        correctAnswer: 0,
        explanation: "Calculate the remainder of division by 7."
      }))
    ]
  },
  {
    id: 'increments',
    title: 'Increments (++)',
    subtitle: 'Counting Up',
    icon: 'ArrowUp91',
    content: `
In programming, we are constantly "counting up" or "counting down." Because we do this so often, we use shortcuts called **Increment** (add 1) and **Decrement** (subtract 1).

### 1. The Shortcuts: ++ and --
Instead of typing out a long sentence like "take the current value of x and add one to it," we use two plus signs.

* **x++ (Increment)**: This is exactly the same as saying **x = x + 1**.
* **x-- (Decrement)**: This is exactly the same as saying **x = x - 1**.

If **x** is 5, then **x++** turns it into 6. If **x** is 5, then **x--** turns it into 4.

### 2. The "Timing" Trap: Prefix vs. Postfix
This is a famous "gotcha" for beginners. The position of the plus signs tells the computer **when** to do the math.

* **Postfix (x++)**: "Use it, then change it."
    * The computer uses the current number for whatever it's doing right now, and *only after that* does it add 1.
* **Prefix (++x)**: "Change it, then use it."
    * The computer adds 1 *immediately*, and then uses the new, bigger number for the task.



**Example:**
Imagine you are printing a number:
1. If x is 5, and you print **x++**, the screen shows **5**, but x becomes 6 behind the scenes.
2. If x is 5, and you print **++x**, the computer adds 1 first, so the screen shows **6**.

### 3. Compound Assignment: The "Big Steps"
What if you want to add 5 instead of just 1? You can use **Compound Assignment**. This combines the math (+, -, *, /) with the equals sign (=).

* **x += 5**: "Add 5 to x" (Same as x = x + 5)
* **x -= 10**: "Subtract 10 from x" (Same as x = x - 10)
* **x *= 2**: "Double x" (Same as x = x * 2)



### 4. Why This Matters
Using these shortcuts makes your code much cleaner. 

**Without Shorthand:**
\`playerScore = playerScore + pointsFromKill;\`

**With Shorthand:**
\`playerScore += pointsFromKill;\`

It’s shorter, easier to read, and tells other programmers exactly what your intent is!

### 5. Summary for Beginners
* Use **++** or **--** when you only need to change by **1**.
* Use **+=** or **-=** when you need to change by **any other amount**.
* Stick to **Postfix (x++)** in most cases unless you have a specific reason to change the value before using it.
`,
    questions: [
      {
        id: 'in-1',
        text: "What is the value of 'x' after: int x = 5; x++;",
        options: ["5", "6", "4", "0"],
        correctAnswer: 1,
        explanation: "x++ adds 1 to the current value."
      },
      {
        id: 'in-2',
        text: "If int a = 10; int b = a--; what is the value of 'b'?",
        options: ["10", "9", "11", "0"],
        correctAnswer: 0,
        explanation: "In postfix decrement (a--), the value is assigned to b before a is decremented."
      },
      {
        id: 'in-3',
        text: "Which of the following is equivalent to x = x + 5?",
        options: ["x++ 5", "x += 5", "x + 5", "x =+ 5"],
        correctAnswer: 1,
        explanation: "+= is the compound assignment operator for addition."
      },
      {
        id: 'in-4',
        text: "What happens if you use ++ on a boolean variable in C#?",
        options: ["It becomes true", "It toggles the value", "It causes a compiler error", "It becomes false"],
        correctAnswer: 2,
        explanation: "The increment operator only works on numeric types (int, double, etc.)."
      },
      {
        id: 'in-5',
        text: "If int i = 0; while(i < 5) { i++; } what is the final value of i?",
        options: ["4", "5", "6", "0"],
        correctAnswer: 1,
        explanation: "The loop runs until i is no longer less than 5, so it stops at 5."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `in-extra-${i}`,
        text: `If x = ${i}, what is ++x?`,
        options: [`${i}`, `${i + 1}`, `${i - 1}`, "0"],
        correctAnswer: 1,
        explanation: "Prefix increment adds 1 immediately."
      }))
    ]
  },
  {
    id: 'mixing-types',
    title: 'Mixing Types',
    subtitle: 'Automatic Conversion',
    icon: 'Blender',
    content: `
In programming, the computer needs to know exactly what kind of "box" a number is sitting in. If you try to do math using a whole number and a decimal number, the computer has to make a choice: which box should the final answer go into?

### 1. The "Automatic Upgrade" (Implicit Conversion)
Computers are designed to be safe. If you mix two different types, the computer will automatically "upgrade" the smaller type to the larger one so that no information is lost. This is called **Type Promotion**.

* **The Rule**: If you add an Integer (whole number) to a Double (decimal), the result will always be a Double.
* **Example**: 5 + 2.5
    * The computer thinks: "I can't put 7.5 into a whole-number box, so I will turn the 5 into 5.0 first."
    * **Result**: 7.5



### 2. The "Forced Squeeze" (Explicit Casting)
Sometimes you want to turn a decimal into a whole number on purpose. To do this, you have to "force" it. This is called **Casting**. 

* **The Warning**: When you force a large decimal into a small integer box, the computer has to "chop off" the extra data to make it fit.
* **Example**: Converting 9.9 into an Integer.
    * The computer says: "I can only keep the 9. The 0.9 doesn't fit in this box!"
    * **Result**: 9 (You just lost almost a whole unit of value!)



### 3. The Hierarchy: Who is Bigger?
Think of this as a ladder. The computer will always move **up** the ladder automatically, but you have to force it to move **down**.

1. **Double** (The King: Highest precision, handles huge decimals)
2. **Float** (Standard decimal)
3. **Long** (Huge whole numbers)
4. **Int** (Standard whole numbers)

### 4. Why This Matters: The "Mystery Bug"
If you aren't careful, the computer might "upgrade" a number when you don't expect it, or you might "downgrade" a number and lose money in a calculation.

**Example**: 
If you are calculating a bank balance and you accidentally cast a **$100.99** value into an **Integer**, the bank record will show **$100**. That $0.99 just vanished! This is why high-precision apps (like banking or space flight) always use the biggest "boxes" (Doubles) to keep every decimal safe.

### 5. Summary for Beginners
* **Promotion** is an automatic "Upgrade" (Safe).
* **Casting** is a manual "Squeeze" (Risky, can lose data).
* Always look at your math and ask: **"Is there a decimal anywhere?"** If yes, the whole answer will likely become a decimal.
`,
    questions: [
      {
        id: 'mtx-1',
        text: "What is the resulting type of: 5 + 2.0?",
        options: ["int", "double", "float", "decimal"],
        correctAnswer: 1,
        explanation: "C# promotes the int (5) to a double to match 2.0."
      },
      {
        id: 'mtx-2',
        text: "What happens when you cast 9.99 to an int: (int)9.99?",
        options: ["It rounds to 10", "It stays 9.99", "It truncates to 9", "It causes an error"],
        correctAnswer: 2,
        explanation: "Casting a double to an int always truncates the decimal part."
      },
      {
        id: 'mtx-3',
        text: "Which type is considered the 'most precise' for general decimal math in C#?",
        options: ["float", "double", "int", "long"],
        correctAnswer: 1,
        explanation: "Double-precision floating-point (double) is the standard for high-precision math."
      },
      {
        id: 'mtx-4',
        text: "If you add a 'char' and an 'int', what is the result type?",
        options: ["char", "string", "int", "error"],
        correctAnswer: 2,
        explanation: "Chars are internally represented as numeric ASCII/Unicode values, so they promote to int."
      },
      {
        id: 'mtx-5',
        text: "Implicit conversion from double to int is allowed in C#.",
        options: ["True", "False", "Only if the double is a whole number", "Only in older versions"],
        correctAnswer: 1,
        explanation: "C# requires an explicit cast from double to int because it is a 'narrowing' conversion that can lose data."
      },
      ...Array.from({ length: 15 }, (_, i) => ({
        id: `mtx-extra-${i}`,
        text: `Result of (int)(${i}.99 + 1)?`,
        options: [`${i + 1}`, `${i + 2}`, `${i}`, "0"],
        correctAnswer: 0,
        explanation: "The addition happens first (i.99 + 1 = i+1.99), then truncation to integer."
      }))
    ]
  },
  {
    id: 'calculus',
    title: 'Calculus: Functions & Derivatives',
    subtitle: 'The Study of Change',
    icon: 'Activity',
    content: `
Calculus is the math of "motion." In the digital world, we use it to make cars drive themselves, to make water splash realistically in video games, and to help AI learn from its mistakes.

### 1. Functions: The "Input-Output" Machine
Think of a function as a machine. You drop an input (x) into the top, the machine does a specific rule, and it spits out an output (y).

* **Notation**: y = f(x) (This just means "y is a function of x").
* **Example**: f(x) = x² + 3. If you put in 2, the machine does 2² + 3 and spits out **7**.
* **Domain & Range**: The **Domain** is every number you are allowed to put *into* the machine. The **Range** is every possible number that can come *out*.



### 2. The Derivative: Measuring "The Hustle"
A **Derivative** is just a fancy word for **The Rate of Change**. It tells you how fast the output is changing at any exact moment.

* **The Slope**: On a graph, the derivative is the "steepness" of the line. If a hill is getting steeper, the derivative is increasing.
* **The Power Rule (The Easy Way)**: There is a shortcut to finding a derivative. If you have xⁿ, you move the exponent to the front (multiplying it with the number infront of the x (coefficient)) and subtract 1 from the power.
    * **Example**: The derivative of x³ is **3x²**.



### 3. Calculus in the Tech World
Why do programmers care about slopes and curves? Because derivatives help us **Optimize**.

* **Machine Learning (AI)**: When an AI "learns," it uses something called **Gradient Descent**. It uses derivatives to figure out which direction to "step" to make the fewest mistakes.
* **Physics Engines**: In a game like *Angry Birds*, the computer needs to know the bird's speed.
    * The derivative of **Position** is **Velocity** (Speed).
    * The derivative of **Velocity** is **Acceleration**.
* **Optimization**: If you have an equation for the "Cost" of running a server, the derivative helps you find the exact "bottom" of the curve where the cost is the lowest.



### 4. Common Shortcuts to Remember
You don't always have to do hard math. There are "Cheat Codes" for derivatives:
* **The Constant Rule**: The derivative of a plain number (like 5) is always **0**. (Because a plain number never changes!)
* **The Linear Rule**: The derivative of 5x is just **5**. (The rate of change is constant).
* **The Power Rule**: The derivative of x² is **2x**.

### 5. Summary for Beginners
* A **Function** is the "Rule" of how things work.
* A **Derivative** is the "Speedometer" that tells you how fast that rule is changing.
* If you want to find the **Best, Worst, Fastest, or Slowest** version of something, you use Calculus!
`,
    questions: [
      {
        id: 'calc-1',
        text: "What is the derivative of f(x) = x³?",
        options: ["3x³", "x²", "3x²", "2x³"],
        correctAnswer: 2,
        explanation: "Using the power rule: the derivative of \( x^n \) is \( nx^{n-1} \). So, the derivative of \( x^3 \) is \( 3x^2 \)."
      },
      {
        id: 'calc-2',
        text: "If f(x) = 10, what is f'(x)?",
        options: ["10", "1", "0", "x"],
        correctAnswer: 2,
        explanation: "The derivative of a constant is always 0 because a constant value does not change."
      },
      {
        id: 'calc-3',
        text: "What does the derivative represent geometrically?",
        options: ["The area under a curve", "The slope of the tangent line", "The intersection with the Y-axis", "The length of the curve"],
        correctAnswer: 1,
        explanation: "The derivative gives the instantaneous rate of change, which is the slope of the line touching the curve at that point."
      },
      {
        id: 'calc-4',
        text: "Find the derivative of f(x) = 5x² + 4x + 7.",
        options: ["10x + 4", "5x + 4", "10x + 11", "10x² + 4"],
        correctAnswer: 0,
        explanation: "d/dx(5x²) = 10x, d/dx(4x) = 4, d/dx(7) = 0. Summing them gives 10x + 4."
      },
      {
        id: 'calc-5',
        text: "In machine learning, which algorithm uses derivatives to minimize an error function?",
        options: ["Binary Search", "Gradient Descent", "Quick Sort", "Dijkstra's Algorithm"],
        correctAnswer: 1,
        explanation: "Gradient Descent calculates the derivative (gradient) of the loss function to find the direction of steepest descent."
      },
      {
        id: 'calc-6',
        text: "What is the second derivative of f(x) = x²?",
        options: ["2x", "2", "0", "x"],
        correctAnswer: 1,
        explanation: "First derivative is 2x. The derivative of 2x is 2."
      },
      {
        id: 'calc-7',
        text: "If a function represents position over time, what does its first derivative represent?",
        options: ["Acceleration", "Velocity", "Mass", "Force"],
        correctAnswer: 1,
        explanation: "Velocity is the rate of change of position with respect to time."
      },
      {
        id: 'calc-8',
        text: "What is the derivative of f(x) = 1/x?",
        options: ["1", "ln(x)", "-1/x²", "x²"],
        correctAnswer: 2,
        explanation: "1/x is the same as \( x^{-1} \). Its derivative is \( -1 \times x^{-2} \), which is \( -1/x^2 \)."
      },
      {
        id: 'calc-9',
        text: "Which rule is used to find the derivative of a product of two functions?",
        options: ["Chain Rule", "Power Rule", "Product Rule", "Quotient Rule"],
        correctAnswer: 2,
        explanation: "The Product Rule is used to find the derivative of two functions multiplied together."
      },
      {
        id: 'calc-10',
        text: "What is the derivative of f(x) = 7x?",
        options: ["7", "x", "0", "7x²"],
        correctAnswer: 0,
        explanation: "The derivative of a linear function ax is simply the coefficient a."
      },
      ...Array.from({ length: 10 }, (_, i) => ({
        id: `calc-extra-${i}`,
        text: `Find the derivative of f(x) = ${i + 2}x^${i + 2}.`,
        options: [
          `${(i + 2) * (i + 2)}x^${i + 1}`,
          `${i + 2}x^${i + 1}`,
          `${(i + 2) * (i + 1)}x^${i}`,
          "0"
        ],
        correctAnswer: 0,
        explanation: "Multiply the coefficient by the power and subtract one from the power."
      }))
    ]
  }
];
