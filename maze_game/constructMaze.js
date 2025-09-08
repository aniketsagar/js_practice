/**
 * cell is the space user can visit we will use a rectangle shape for cell
 * We will use a 2d array for cell 
 * create a grid of cell []
 * pick a random starting cell 
 * 
 * for that cell build a randomly ordered list of neighbours ( 2- 4 cells )
 * if neighbours have been visited before remove them from list
 * for each remaining neighbour move to it and remove the wall between those two cells 
 * 
 * repeat this for a new cell from the list
 * 
 * We are going to have 3 datastructure 
 * Grid -- 2d array for the cell gird
 * verticle - 2d array for verticle walls i'e wall between two latrally adjecent cells
 * horizontal - 2d array for horizontal walls i,e wall between two vertically adjecent cells 
 * 
 * grid  -- array we will use to see if we have visited cell 
 * 
 * 2d array 
 * intialized to false
 *          
 * [00][01][02]
 * [10][11][12]
 * [20][21][22]
 * 
 * verticle 
 * [
 *  [false,false] -> for walls on column 0 traversed row wise
 *                      what this means is that the first false is 
 *                      for a wall that exist between cell 00  and 01
 *                      the second false is for the wall that exist between 
 *                      cell 01 and cell 02 
 *                     
 * [false,false] -> here the fist false is for wall that exist between
 *                        cell 10 and cell 11 and next false is for wall between
 *                         cell 11 and 12 
 * 
 * [false false ] -> here first false is for walls between cell 20 and 21
 *                  second false is for walls between cells 21 and 22
 *                          
 * ]
 * 
 * 
 * horizontal           -> for walls between two vertically adjecent cells 
 * [
 *  [false false false]     here first false is for wall between cell 00 and cell 10
 *                          second false for the wall between cell 01 and 11 
 *                          third false is for wall between the cell 02 and 12
 *                          
 *  [false false false]     here the first false is for wall between cell 10 and 20
 *                          second false is for wall between 11 and 21 
 *                          third false is for wall between 12 and 22
 *  
 * ]
 */

class Maze{
    constructor(){

    }
}