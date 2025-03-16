function goToNextChapter(chapterNumber) {
  const narrativeContainer = document.getElementById('narrative-container');

  let chapterContent = ""; // Define chapter content dynamically
  if (chapterNumber === 2) {
    chapterContent = `
      <section class="chapter" data-chapter="2">
        <h2>Chapter 2: Navigating Adolescence and Exile</h2>
        <p>As Marjane entered her teenage years, the burdens of living under an oppressive regime became more palpable. The Iran-Iraq War had begun, and the realities of war infiltrated every aspect of daily life. Air raid sirens, bomb shelters, and loss became an inescapable part of her existence. Despite the horrors of war, Marjane's family tried to maintain a semblance of normalcy, holding onto their values and sense of humor as a way of coping with the despair around them.</p>
        <p>Her education became a battleground for ideological conformity. Schools reinforced the strict moral codes of the regime, teaching girls to be subservient and modest while erasing any discussion of pre-revolutionary history. Marjane, always outspoken, found herself at odds with authority. She questioned her teachers, defied unjust rules, and often landed in trouble. Her rebellious spirit was both a source of pride and concern for her parents.</p>
        <p>Eventually, her parents made the painful decision to send her to Austria, hoping to shield her from the dangers of war and give her a chance at a better future. The farewell was heart-wrenching, as Marjane left behind not just her family but her entire sense of self. Arriving in Austria, she found herself in an alien world. The cultural differences were stark, and the stereotypes about Iranians she encountered added to her feeling of isolation.</p>
        <button onclick="goToNextChapter(3)">Next Chapter</button>
      </section>
    `;
  } else if (chapterNumber === 3) {
    chapterContent = `
      <section class="chapter" data-chapter="3">
        <h2>Chapter 3: Self-Discovery and Return</h2>
        <p>Marjane’s return to Iran after her years in Austria was bittersweet. She longed for the familiarity of home, but the reality she encountered was starkly different from the memories she had clung to during her time abroad. The societal restrictions under the Islamic Republic were more suffocating than ever, and the chasm between her newfound independence and Iran's rigid cultural norms was vast.</p>
        <p>Reintegrating into her homeland proved to be an uphill battle. Marjane found herself alienated from her peers, who viewed her as an outsider because of her years abroad. She struggled with feelings of guilt for having escaped the war while others endured its hardships. This guilt was compounded by the pressure to conform to societal expectations—expectations that often clashed with her experiences and values.</p>
        <p>Determined to find her place, Marjane enrolled in art school, hoping to channel her frustrations and dreams into creativity. However, even here, she encountered roadblocks. Every piece of art she created was scrutinized for compliance with moral codes, and self-expression was stifled by censorship. Despite these challenges, Marjane used her art as a means of rebellion, finding subtle ways to push boundaries and assert her voice.</p>
        <button onclick="goToNextChapter(4)">Next Chapter</button>
      </section>
    `;
  } else if (chapterNumber === 4) {
    chapterContent = `
      <section class="chapter" data-chapter="4">
        <h2>Chapter 4: Creating *Persepolis*</h2>
        <p>Marjane's decision to create *Persepolis* was both a personal and political act. Drawing upon her life experiences, she crafted a graphic memoir that would resonate with readers around the world. The medium of the graphic novel allowed her to combine her artistic talents with her storytelling prowess, creating a work that was both visually striking and deeply moving.</p>
        <p>Writing *Persepolis* was a cathartic process for Marjane. It enabled her to reflect on the events that had shaped her, from her childhood in Iran to her years of exile and beyond. The act of putting pen to paper was a way for her to reclaim her voice and make sense of the complexities of her journey. Through her illustrations, she was able to capture emotions and nuances that words alone could not convey.</p>
        <p>The memoir was more than just a personal story; it was a window into the lived experiences of millions of Iranians whose voices had been silenced by history. *Persepolis* challenged stereotypes and misconceptions, offering a nuanced portrayal of Iran and its people. It humanized a nation often reduced to headlines and political rhetoric, showing the struggles, resilience, and humanity of its citizens.</p>
        <button onclick="restartNarrative()">Restart the Story</button>
      </section>
    `;
    
  } else {
    chapterContent = `
      <section class="chapter" data-chapter="1">
        <h2>Chapter 1: Childhood in Revolutionary Iran</h2>
        <p>Marjane Satrapi’s childhood was steeped in stories of resistance, revolution, and resilience. Born into a progressive and politically active family in Tehran, her early years coincided with the collapse of the Shah's monarchy and the onset of the Iranian Revolution in 1979. Her parents, who firmly believed in justice and equality, often attended protests and defied the oppressive forces of the regime. This atmosphere of defiance shaped Marjane's formative years, instilling in her a deep curiosity about power, freedom, and what it means to resist oppression.</p>
        <p>As a child, Marjane was not shielded from the harsh realities of the world around her. She grew up hearing stories of her family's involvement in political struggles, including her grandfather's imprisonment as a political dissident. These tales, though sobering, were told with a sense of pride, and they inspired Marjane to believe in the possibility of change. Her parents encouraged her to read books about revolutionary figures like Marx and Gandhi, fueling her imagination and broadening her worldview.</p>
        <p>At school, however, the tides were turning. The rise of the Islamic Republic brought with it strict cultural and moral codes that extended to every corner of Iranian society. Girls were required to wear the hijab, and any semblance of individuality was discouraged. Despite her young age, Marjane began to question these impositions. Why were the freedoms her parents fought for being taken away? Why were people being punished for expressing their beliefs?</p>
        <button onclick="goToNextChapter(2)">Next Chapter</button>
      </section>
    `;
  }
  
  narrativeContainer.innerHTML = chapterContent; // Update the HTML dynamically
}

function restartNarrative() {
  goToNextChapter(1); // Start from Chapter 1
}
