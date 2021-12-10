function gradingStudents(grades) {
    // Write your code here
    let finalGrades = [];
    for(let i = 0; i < grades.length; i++){
        let modulor = grades[i] % 5;
        const multiple =(grades [i] - modulor)+5;
         if(grades[i] < 38){
             finalGrades.push(grades[i]);
         }
        else{
            if(multiple - grades[i] < 3){
                finalGrades.push(multiple);
            }
            else{
                finalGrades.push(grades[i]);
            }
        }
    }
    return finalGrades;
}

let grader= [74, 67, 38, 33];
gradingStudents(grader);
function gradingStudents(grades){
    let result = [];
    for(let key of grades){
        let newGrade = 0;
        let diff = 0;
        if(key >= 38 && key % 5 != 0){
            diff = key % 5;
            if(diff >= 3){
                newGrade = (key - diff) + 5;
                
            }else{
                newGrade = key;
            }
            result.push(newGrade);
            
            
        }else{
            newGrade= key;
            result.push(key);
        }
        
    }
    console.log(result);
    return result;
}