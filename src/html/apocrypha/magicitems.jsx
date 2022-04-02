const magicitems = <div>
  <h2>
    Magic Items of Interest
  </h2>


  <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

    <div className={"magicitems-item"} style={{marginBottom:   "2rem",  marginTop: "1rem"}}>
      <div style={{textAlign: "center"}}>
        <img alt="" src={"/images/apocrypha/item-coatoffreshpaint.png"}/>
      </div>
      <div><b><font color="white" face="sans-serif">Coat of Fresh Paint</font></b></div>
      <div><b><font color="white" face="sans-serif">Level 13+</font></b></div>
      <div><i>This armor is bright white, and leaves marks on everything it touches.</i></div>
      <div>Lvl 13 +3 17,000 gp</div>
      <div>Lvl 18 +4 85,000 gp</div>
      <div>Lvl 23 +5 425,000 gp</div>
      <div>Lvl 28 +6 2,125,000 gp</div>


      <div><b>Armor:</b> Cloth, Leather, Hide, Chain</div>


      <div><b>Enhancement:</b> AC</div>


      <div><b>Power (Encounter):</b> Minor action. Until the end of your next turn, any enemy that hits you with a melee
        attack is marked by you and immobilized (save ends)
      </div>


    </div>

    <div className={"magicitems-item"} style={{marginBottom:   "2rem",  marginTop: "1rem"}}>
      <div style={{textAlign: "center"}}><img alt="" src={"/images/apocrypha/item-beltofscotch.png"}/></div>


      <div><b><font color="white" face="sans-serif">Belt of Scotch</font></b></div>
      <div><b><font color="white" face="sans-serif">Level 11</font></b></div>


      <div><i>The buckle of this belt contains a secret elixir that rejuvenates and invigorates you.</i></div>


      <div><b>Item Slot:</b> Waist&nbsp;&nbsp;9,000 gp</div>


      <div><b>Property:</b> You gain an additional daily healing surge.</div>


      <div><b>Power (Daily):</b> Minor action. Spend a healing surge and regain hit points as normal for that surge.
        Until
        the end of your next turn, you gain a +2 bonus to all defenses.
      </div>


    </div>

    <div className={"magicitems-item"} style={{marginBottom:   "2rem",  marginTop: "1rem"}}>

      <div style={{textAlign: "center"}}><img alt="" src={"/images/apocrypha/item-teachingstaff.png"}/></div>


      <div><b><font color="white" face="sans-serif">Teaching Staff</font></b></div>
      <div><b><font color="white" face="sans-serif">Level 12+</font></b></div>


      <div><i>This staff whispers your enemies' weaknesses to you with each attack.</i></div>


      <div>Lvl 12 +3 13,000 gp
        Lvl 17 +4 65,000 gp
      </div>
      <div>Lvl 22 +5 325,000 gp
        Lvl 27 +6 1,625,000 gp
      </div>


      <div><b>Implement (Staff)</b></div>


      <div><b>Enhancement:</b> Attack rolls and damage rolls</div>


      <div><b>Critical:</b> +1d6 damage per plus</div>


      <div><b>Property:</b> When making an attack against an enemy you have already hit with an attack in this
        encounter,
        you gain an item bonus to damage rolls equal to the enhancement bonus of this staff.
      </div>


      <div><b>Power (Daily):</b> Minor Action. Choose one enemy you have already hit with an attack in this encounter.
        Until the end of your next turn, target gains Vulnerable 5 to all of your attacks. Level 17: Vulnerable 10.
        Level
        27: Vulnerable 15.
      </div>
    </div>

    <div className={"magicitems-item"} style={{marginBottom:   "2rem",  marginTop: "1rem"}}>


      <div style={{textAlign: "center"}}><img alt="" src={"/images/apocrypha/item-polaricecap.png"}/></div>


      <div><b><font color="white" face="sans-serif">Polar Ice Cap</font></b></div>
      <div><b><font color="white" face="sans-serif">Level 18</font></b></div>


      <div><i>This brightly colored knitted cap keeps frost magic at the forefront of your mind.</i></div>


      <div><b>Item Slot:</b> Head&nbsp;&nbsp;85,000 gp</div>


      <div><b>Power (Daily):</b> No Action. You may use any melee attack power with the cold keyword in place of a melee
        basic attack, or you may use any ranged attack power with the cold keyword in place of a ranged basic attack. If
        you use a daily or encounter power, it is expended as normal.
      </div>


    </div>

    <div className={"magicitems-item"} style={{marginBottom:   "2rem",  marginTop: "1rem"}}>

      <div style={{textAlign: "center"}}><img alt="" src={"/images/apocrypha/item-ringofthedinnerbell.png"}/></div>


      <div><b><font color="white" face="sans-serif">Ring of the Dinner Bell</font></b></div>
      <div><b><font color="white" face="sans-serif">Level 14</font></b></div>


      <div><i>While wearing this ring, a small snack nourishes you as much as a large meal.</i></div>


      <div><b>Item Slot:</b> Ring&nbsp;&nbsp;21,000 gp</div>


      <div><b>Property:</b> You gain an additional 6 hit points when spending a healing surge during a short rest.</div>


      <div><b>Power (Daily):</b> Standard Action. Use this power during a short rest. At the end of the short rest, gain
        hit points as if you had spent a healing surge.
      </div>


    </div>


    <div className={"magicitems-item"} style={{marginBottom:   "2rem",  marginTop: "1rem"}}>

      <div style={{textAlign: "center"}}><img alt="" src={"/images/apocrypha/item-chokerofthechicken.png"}/></div>


      <div><b><font color="white" face="sans-serif">Choker of the Chicken</font></b></div>
      <div><b><font color="white" face="sans-serif">Level 9+</font></b></div>


      <div><i>This slender neckpiece enhances your ability to avoid your enemies.</i></div>


      <div>Lvl 9 +2 4,200 gp
        Lvl 14 +3 21,000 gp
        Lvl 19 +4 105,000 gp
      </div>
      <div>Lvl 24 +5 525,000 gp
        Lvl 29 +6 2,625,000 gp
      </div>


      <div><b>Item Slot:</b> Neck</div>


      <div><b>Enhancement:</b> Fortitude, Reflex, and Will</div>


      <div><b>Property:</b> If all your movement in this round is away from the nearest visible enemy, gain a +2 item
        bonus to your speed
      </div>

    </div>
  </div>

</div>

export default magicitems;