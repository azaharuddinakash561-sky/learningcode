 function woodQuantity(chairQ, tableQ, bedQ){
    let per_chair_wood = 3;
    let per_table_wood = 10;
    let per_bed_wood = 50;

    let t_chaira_wood = chairQ * per_chair_wood ;
    let t_table_wood = tableQ * per_table_wood ;
    let t_bed_wood = bedQ * per_bed_wood ;

    const totalwood = t_chaira_wood + t_table_wood + t_bed_wood;
    return totalwood;    
}
let wood_paramiter = woodQuantity(3, 5, 2)
console.log(wood_paramiter);
