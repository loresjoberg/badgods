const quittinggame = <div>
  <div data-style="width:650px;background-color:#daaf71;padding:20px;font-family: Verdana, Geneva, Arial, sans-serif;border-style:double;border-width:6px;border-color:#996633;margin-left:auto;margin-right:auto;text-align:left">
    <div data-style="margin-bottom:5px;font-weight:bold;font-size:100%;margin-left:auto;margin-right:auto;text-align:center;font-size:150%">
      <img alt="" className={"ratingsImage"} src={"/images/book-of-ratings/quitfaces-banner.png"}/>
    </div>
    <br clear="all"/>
    <div data-style="margin-bottom:10px;font-size:90%;text-align:left">
      While we respect your decision to abandon everything you've worked for and walk away from a game that loves you in
      a way that friends and family never could, we'd like some feedback. Please tell us why you're leaving, so we can
      improve Eternal Skirmish for people who aren't quitters. That's right, we said it: you're a quitter. You're
      quitting, and that makes you a quitter, <em>quitter.</em>
    </div>
    <div data-style="margin-bottom:10px;font-weight:bold;font-size:90%;text-align:center">
      Why are you leaving Eternal Skirmish?
    </div>
    <form name="form1" data-style="margin-bottom:10px">
      <div className="selection" data-style="text-align:center">
        <select name="selectOptions" data-onchange="document.getElementById('output_area').innerHTML = this.value">
          <option value="">Please Choose a Reason</option>
          <option
            value="Studies show that Eternal Skirmish is only 3.4% more addictive than injected heroin, but that it destroys 15% fewer families, causes 18% fewer job losses, and is 92% less likely to lead to death by aspiration of vomitus. We appreciate your need to manage your addictions, but we feel that if you give up heroin in favor of our game, you won't regret it once you get over the shakes and diarrhea.">Heroin
            addiction disrupts life less
          </option>
          <option
            value="Our developers are working hard to create new content for those who have become unstuck in time or who have melded with the cosmic overmind. Our next release will see new quests that require you to complete them before they're included in the game code, dungeon bosses that must be defeated on all possible timelines simultaneously, and achievements for leveling a character on all seven thousand and seven spheres of divided oneness."> Space
            and time are illusions, have already completed all future expansions
          </option>
          <option
            value="Come on, do you really like milk pails that much? Give up your beardy ways and join the real world, where real people with real lives pretend to be fictional fantasy creatures."> Rumspringa
            coming to an end
          </option>
          <option
            value="Perhaps you'd like to try our new MMO, Galactic Skirmish, where instead of killing animals and monsters that are combinations of animals, you kill alien creatures like the Vollphammra, a striped, clawed predator with green ear-tufts."> Got
            a job killing tigers and collecting their body parts; game now too much like work
          </option>
          <option
            value="Fuckin' moms. For an extra five bucks a month, we'll bill each month's subscription fee as &quot;SALVESANDOINTMENTSDOTCOM&quot; and your parents will be too embarrassed to ask each other what the fee is for. Deal? Deal!"> Mom
            bitch
          </option>
          <option
            value="If you consider this change in the context of the most recent update, the resilience coefficient drop is offset by the increased evasion percentage in the Tier Epsilon armor set, resulting in a small efficiency increase, you god-damned whiner."> Devastated
            to core by reduction of Fire Blast resilience coefficient by 3%
          </option>
          <option
            value="We recently added an elf-tit size slider in the interface preferences. Simply move the slider up from &quot;Brazilian Dancer&quot; to &quot;Late Eighties Novelty Porn Star&quot; and you'll enjoy the largest elven breasts in any video game currently available outside of Japan."> Found
            game where elves have bigger tits
          </option>
          <option value="That achievement is no longer necessary to get the Epic Peccary Mount."> Just trying to get the
            "Quit Game" achievement
          </option>
          <option
            value="We appreciate your forbearance in not wiping the planet of all resistance with your gravity polarization beams. However, we'd like to point out that if you inform your galactic overlords that our planet &quot;requires more observation&quot; you'll be able to keep playing long enough to experience our next expansion, &quot;Retribution of the Troll Bungalows.&quot;"> Your
            human amusements have convinced us to leave your planet unconquered...for now
          </option>
          <option
            value="Turquoise Orcling Redemption Cards are freely available on eBay from people who would rather have three thousand dollars than a completely meaningless virtual vanity pet. And we know you're not one of &lt;em&gt;those&lt;/em&gt; people."> If
            I can't get the special Turquoise Orcling pet only available to SkirmishCon attendees, why bother?
          </option>
          <option
            value="We called your dance class and told them you won't be attending any more because the teacher is an ugly old bag of flopping, gasping fish with attendant arrythmic movements and smell. You now have an extra five hours a week, you're welcome."> Playing
            forty hours a week, falling behind friends who play sixty hours a week
          </option>
          <option
            value="Look at it this way: whatever you accomplish in this life will be lost forever when the sun goes nova and chars the planet into an ashen, lifeless ball. But Eternal Skirmish beams your character data out to the stars on a regular basis. You, your works, and your descendants will all perish, but your level 80 gnomish warrior will live forever in the heavens."> Getting
            my epic armor set has not led to the real-world respect and admiration I expected
          </option>
          <option
            value="We apologize for interfering with your desire to turn our game into a mass of crude, explicit sexual references. We suggest that you come up with more refined, obscure sexual references. Perhaps you could name your character Pinksnake or Googusher."> Stupid
            mods won't let me name my character Thorin Oakencock
          </option>
          <option
            value="Many of our less fortunate subscribers have saved money by selling their computer and shutting down their internet connection, allowing them to continue their Eternal Skirmish adventures by breaking into the homes of vacationing elderly people and using their possessions."> Hit
            hard by recession, have already sold personal belongings
          </option>
          <option
            value="We have extensive plans to expand the options for macrame-loving players, including a wide array of new twine and shell drops and...you know what? No. Screw you. Go play the fucking Sims or something. Jesus. Macrame."> Macrame
            profession insufficiently detailed
          </option>
          <option value="Never pick dare."> Picked "dare"</option>
        </select>
      </div>
    </form>
    <div id="output_area"
         data-style="width:600px;min-height:120px;border-width:1px;border-style:solid;padding:10px;background-color:white;margin-left:auto;margin-right:auto;font-size:90%">
    </div>
  </div>
</div>

export default quittinggame;