const roasts = [
    // ==========================================
    // MILD
    // ==========================================
    ["Mild", "Silly goose", "A playful way to call someone silly."],
    ["Mild", "Clown moment", "A funny label for an embarrassing moment."],
    ["Mild", "Goofy ahh", "Internet slang for something hilariously goofy."],
    ["Mild", "NPC energy", "Acting predictable or scripted."],
    ["Mild", "Bro is cooked", "A playful way to say someone has messed up."],
    ["Mild", "Side quest behavior", "Doing everything except the thing you were supposed to do."],
    ["Mild", "Silly", "Playfully foolish."],
    ["Mild", "Fool", "A classic term for someone lacking good sense."],
    ["Mild", "Idiot", "Direct label for someone showing total lack of thought."],
    ["Mild", "Dummy", "Playful insult for a foolish mistake."],
    ["Mild", "Jerk", "Someone being inconsiderate or annoying."],
    ["Mild", "Loser", "Casual roast for an embarrassing defeat."],
    ["Mild", "Stupid", "Plain, blunt label for senseless behavior."],
    ["Mild", "Rizz", "Charm or flirting ability."],
    ["Mild", "No cap", "Seriously or honestly; no lie."],
    ["Mild", "W", "Win or something good."],
    ["Mild", "L", "Loss or something bad."],
    ["Mild", "Based", "Confidently expressing an opinion."],
    ["Mild", "GOAT", "Greatest of all time."],
    ["Mild", "Fire", "Excellent or impressive."],
    ["Mild", "Slay", "Do something extremely well."],
    ["Mild", "Ate", "Did something exceptionally well."],
    ["Mild", "Bet", "Okay or agreed."],
    ["Mild", "Bro", "Friendly way to address someone."],
    ["Mild", "FR", "For real or genuinely."],
    ["Mild", "NGL", "Not gonna lie."],
    ["Mild", "IMO", "In my opinion."],
    ["Mild", "IDK", "I don't know."],
    ["Mild", "IKR", "I know right."],
    ["Mild", "TBH", "To be honest."],
    ["Mild", "RN", "Right now."],
    ["Mild", "Lowkey", "Slightly or secretly."],
    ["Mild", "Highkey", "Openly or strongly."],
    ["Mild", "Vibe", "Overall feeling or atmosphere."],
    ["Mild", "Vibing", "Relaxing or enjoying the moment."],
    ["Mild", "Aura", "Personal presence or coolness."],
    ["Mild", "Aura points", "Imaginary points for cool behavior."],
    ["Mild", "Awkward", "Uncomfortable or socially strange."],
    ["Mild", "Yap", "Talk excessively."],
    ["Mild", "Yapping", "Excessive talking."],
    ["Mild", "Lock in", "Focus seriously."],
    ["Mild", "Locked in", "Fully focused."],
    ["Mild", "Grind", "Work persistently toward a goal."],
    ["Mild", "Grinding", "Working hard repeatedly."],
    ["Mild", "Main character", "Person acting confidently as if central to a story."],
    ["Mild", "Main-character energy", "Confident dramatic presence."],
    ["Mild", "Side quest", "A minor task or distraction."],
    ["Mild", "Plot twist", "Unexpected development."],
    ["Mild", "Lore", "Background history or stories."],
    ["Mild", "Deep lore", "Obscure background information."],
    ["Mild", "Canon", "Officially part of a story or personal running joke."],
    ["Mild", "Uncanon", "Not officially part of the story."],
    ["Mild", "POV", "Point of view."],
    ["Mild", "IRL", "In real life."],
    ["Mild", "DM", "Direct message."],
    ["Mild", "FYP", "For You Page."],
    ["Mild", "Viral", "Spreading rapidly online."],
    ["Mild", "Receipts", "Evidence supporting a claim."],
    ["Mild", "Memeable", "Easy to turn into a meme."],
    ["Mild", "Goated", "Exceptionally good."],
    ["Mild", "Legendary", "Extremely memorable or impressive."],
    ["Mild", "Iconic", "Highly memorable or recognizable."],
    ["Mild", "Valid", "Reasonable or acceptable."],
    ["Mild", "Invalid", "Not convincing or acceptable."],
    ["Mild", "Real", "Expressing agreement or relatability."],
    ["Mild", "So real", "Strong agreement or relatability."],
    ["Mild", "Facts", "Strong agreement with a statement."],
    ["Mild", "Fax", "Playful spelling of facts."],
    ["Mild", "No printer", "Emphasizing that something is true."],
    ["Mild", "Say less", "Understood without further explanation."],
    ["Mild", "It's giving", "Expresses a perceived vibe or quality."],
    ["Mild", "Giving", "Conveying a particular vibe."],
    ["Mild", "Serving", "Looking or performing impressively."],
    ["Mild", "Tea", "Gossip or interesting information."],
    ["Mild", "Spill the tea", "Tell the gossip or details."],
    ["Mild", "Tea was spilled", "Gossip or information was revealed."],
    ["Mild", "Spill", "Tell or reveal information."],
    ["Mild", "Double text", "Sending another message before receiving a reply."],
    ["Mild", "Soft launch", "Subtly revealing something online."],
    ["Mild", "Hard launch", "Clearly revealing something online."],
    ["Mild", "Bestie", "Friendly term for a close friend."],
    ["Mild", "Besties", "Plural friendly term for friends."],
    ["Mild", "Best bro", "Close male friend."],
    ["Mild", "Homie", "Close friend."],
    ["Mild", "Dude", "Casual term for a person."],
    ["Mild", "Fam", "Friend or close group."],
    ["Mild", "Gang", "Friendly term for one's group."],
    ["Mild", "Squad", "Group of friends."],
    ["Mild", "Crew", "Group of friends or teammates."],
    ["Mild", "Bestie core", "Behavior strongly associated with best-friend culture."],
    ["Mild", "Girlboss", "Confident ambitious woman."],
    ["Mild", "King", "Positive term praising someone."],
    ["Mild", "Queen", "Positive term praising someone."],
    ["Mild", "Go off", "Encouragement to continue confidently."],
    ["Mild", "Pop off", "Perform exceptionally or speak boldly."],
    ["Mild", "Understood the assignment", "Performed exactly as expected or better."],
    ["Mild", "Nailed it", "Did something very well."],
    ["Mild", "Crushed it", "Did something extremely well."],
    ["Mild", "Built different", "Unusually capable or resilient."],
    ["Mild", "Built like a tank", "Very sturdy or powerful."],
    ["Mild", "Unit", "Large or impressive person or object."],
    ["Mild", "Beast mode", "Extreme effort or performance."],
    ["Mild", "Clutch", "Performing well under pressure."],
    ["Mild", "Clutched it", "Succeeded at a crucial moment."],
    ["Mild", "W move", "Good decision or action."],
    ["Mild", "Big W", "Major success."],
    ["Mild", "Dub", "Win or success."],
    ["Mild", "Common W", "Expected positive outcome."],
    ["Mild", "Rare W", "Unusual success."],
    ["Mild", "Nerf", "Make something weaker."],
    ["Mild", "Buff", "Make something stronger."],
    ["Mild", "OP", "Overpowered or exceptionally strong."],
    ["Mild", "Meta", "Currently dominant strategy or trend."],
    ["Mild", "Camping", "Staying in one location to gain an advantage."],
    ["Mild", "GG", "Good game."],
    ["Mild", "GGs", "Good games or respectful sign-off."],
    ["Mild", "AFK", "Away from keyboard or temporarily inactive."],
    ["Mild", "Lag", "Delay in an online connection."],
    ["Mild", "Laggy", "Experiencing connection delay."],
    ["Mild", "Newbie", "New or inexperienced person."],
    ["Mild", "Pro", "Highly skilled person."],
    ["Mild", "Delulu era", "Period of unrealistic optimism."],
    ["Mild", "Villain era", "Playful phrase for becoming more assertive."],
    ["Mild", "Healing era", "Period focused on recovery or self-improvement."],
    ["Mild", "Glow-up", "Major positive transformation."],
    ["Mild", "Glowed up", "Improved significantly."],
    ["Mild", "Fit", "Clothing outfit."],
    ["Mild", "Fit check", "Showing or discussing an outfit."],
    ["Mild", "Drip", "Stylish clothing or appearance."],
    ["Mild", "Drippy", "Stylish."],
    ["Mild", "Fresh", "Stylish or new-looking."],
    ["Mild", "Clean", "Stylish or well-executed."],
    ["Mild", "Clean fit", "Stylish outfit."],
    ["Mild", "Steeze", "Effortless style."],
    ["Mild", "Swag", "Confident personal style."],
    ["Mild", "Fly", "Stylish or fashionable."],
    ["Mild", "Fire fit", "Excellent outfit."],
    ["Mild", "Fancy", "Expensive-looking or elegant."],
    ["Mild", "Aesthetic", "Visually pleasing style or theme."],
    ["Mild", "Cozy", "Comfortable and pleasant."],
    ["Mild", "Wholesome", "Kind or heartwarming."],
    ["Mild", "Adorbs", "Very cute."],
    ["Mild", "Cute", "Cute or appealing."],
    ["Mild", "Cutie", "Friendly term for someone cute."],
    ["Mild", "Goofy", "Silly in a harmless way."],
    ["Mild", "Goober", "Playfully silly person."],
    ["Mild", "Nerd", "Person deeply interested in a subject."],
    ["Mild", "Geek", "Enthusiastic expert or fan."],
    ["Mild", "Brainiac", "Very intelligent person."],
    ["Mild", "Smarty", "Playful term for an intelligent person."],
    ["Mild", "Smartypants", "Playful teasing term for a clever person."],
    ["Mild", "Goofball", "Silly person."],
    ["Mild", "Oddball", "Unusual person."],
    ["Mild", "Goof", "Person who behaves foolishly."],
    ["Mild", "Goofing", "Acting silly or joking around."],
    ["Mild", "Chaos", "Complete disorder or energetic confusion."],
    ["Mild", "Chaotic", "Wildly unpredictable."],
    ["Mild", "Wild", "Unexpected or extreme."],
    ["Mild", "Absurd", "Extremely unreasonable or strange."],
    ["Mild", "Too real", "Uncomfortably relatable."],
    ["Mild", "Real talk", "Honest serious conversation."],
    ["Mild", "Straight up", "Honestly or directly."],
    ["Mild", "Literally", "Used for emphasis."],
    ["Mild", "Actually", "Used to correct or emphasize."],
    ["Mild", "Legit", "Genuine or very good."],
    ["Mild", "Legitimately", "Genuinely or seriously."],
    ["Mild", "Cool", "Good or impressive."],
    ["Mild", "Sick", "Excellent or impressive."],
    ["Mild", "Dope", "Excellent or impressive."],
    ["Mild", "Lit", "Exciting or excellent."],
    ["Mild", "Hype", "Excitement or anticipation."],
    ["Mild", "Hyped", "Very excited."],
    ["Mild", "Banger", "Excellent song or piece of content."],
    ["Mild", "Bop", "Catchy or enjoyable song."],
    ["Mild", "Jam", "Favorite or enjoyable song."],
    ["Mild", "Slaps", "Is extremely good or enjoyable."],
    ["Mild", "Goes hard", "Is extremely impressive or intense."],
    ["Mild", "Hits different", "Feels especially meaningful or enjoyable."],
    ["Mild", "Vibes", "Overall emotional atmosphere."],
    ["Mild", "Vibe check", "Assessment of someone's mood or energy."],
    ["Mild", "Passed the vibe check", "Behaved acceptably or pleasantly."],
    ["Mild", "Good vibes", "Positive atmosphere."],
    ["Mild", "Bad vibes", "Negative atmosphere."],
    ["Mild", "Energy", "Personal mood or presence."],
    ["Mild", "Energy shift", "Noticeable change in mood."],
    ["Mild", "Mood", "Expression of agreement or shared feeling."],
    ["Mild", "Big mood", "Strongly relatable feeling."],
    ["Mild", "Felt that", "Expressing empathy or relatability."],
    ["Mild", "Same", "Expressing agreement or shared experience."],
    ["Mild", "Literally me", "Strong identification with a character or situation."],
    ["Mild", "Us", "Expression of shared identity."],
    ["Mild", "We're so back", "Celebration after improvement or comeback."],
    ["Mild", "It's so over", "Playful declaration of defeat."],
    ["Mild", "Never been more back", "Humorous extreme comeback statement."],
    ["Mild", "Let him cook", "Encourage someone to continue their idea."],
    ["Mild", "Let her cook", "Encourage someone to continue their idea."],
    ["Mild", "Bro cooked", "Person succeeded impressively."],
    ["Mild", "Cooking", "Doing something successfully."],
    ["Mild", "Cooked up", "Created something impressive."],
    ["Mild", "Absolute cinema", "Description of highly entertaining events."],
    ["Mild", "Peak", "Highest-quality or ideal example."],
    ["Mild", "Peak fiction", "Extremely good fictional storytelling."],
    ["Mild", "Masterpiece", "Exceptionally well-made work."],
    ["Mild", "Cinema", "Playful praise for dramatic storytelling."],
    ["Mild", "Plot armor", "Fictional protection from consequences."],
    ["Mild", "Brain empty", "Playful way to say you're not thinking."],
    ["Mild", "Head empty", "No thoughts or ideas."],
    ["Mild", "Shared brain cell", "Playful phrase for synchronized thinking."],
    ["Mild", "Lost the plot", "Become confused or distracted."],
    ["Mild", "Bro is onto something", "Recognition that an idea may be good."],
    ["Mild", "Bro is cooking", "Recognition that someone is doing well."],
    ["Mild", "Rusty", "Out of practice."],
    ["Mild", "Clickbait", "Content designed to attract clicks."],
    ["Mild", "Engagement bait", "Content designed to generate interactions."],
    ["Mild", "Farm", "Deliberately collect something."],
    ["Mild", "Influencer", "Person who affects audiences online."],
    ["Mild", "Content creator", "Person who makes online content."],
    ["Mild", "Creator economy", "Online ecosystem of independent creators."],
    ["Mild", "Stanning", "Strongly supporting a celebrity or creator."],
    ["Mild", "Fandom", "Community of fans."],
    ["Mild", "Ship", "Support a romantic pairing in fiction."],
    ["Mild", "Shipping", "Supporting a fictional pairing."],
    ["Mild", "OTP", "Favorite fictional pairing."],
    ["Mild", "Character development", "Change that makes a person or character more interesting."],
    ["Mild", "Green flag", "Positive sign in behavior or personality."],
    ["Mild", "Beige flag", "Quirky neutral trait."],
    ["Mild", "Green-flag energy", "Positive trustworthy vibe."],
    ["Mild", "Crush", "Person you like romantically."],
    ["Mild", "Butterflies", "Excited nervous feeling."],
    ["Mild", "Softie", "Someone secretly or openly gentle and caring."],
    ["Mild", "Golden retriever energy", "Cheerful enthusiastic personality."],
    ["Mild", "Black cat energy", "Quiet independent personality."],
    ["Mild", "Gremlin mode", "Acting messy or chaotic."],
    ["Mild", "Goblin mode", "Relaxed messy behavior without concern for appearances."],
    ["Mild", "Unserious", "Not taking things seriously."],
    ["Mild", "Serious mode", "Being focused and no longer joking."],
    ["Mild", "Classic", "Typical or expected behavior."],
    ["Mild", "Typical", "Unsurprising or predictable."],
    ["Mild", "Of course", "Expression of unsurprise."],
    ["Mild", "Naturally", "Humorous agreement with an expected outcome."],
    ["Mild", "Imagine", "Playful criticism of an unlikely action."],
    ["Mild", "Couldn't be me", "Playful expression of superiority or contrast."],
    ["Mild", "Not me", "Humorous admission of doing something."],
    ["Mild", "Me fr", "Strong identification with a situation."],
    ["Mild", "This is me", "Identification with a meme or situation."],
    ["Mild", "Same energy", "Similar attitude or vibe."],
    ["Mild", "Energy unmatched", "Playful praise for distinctive presence."],
    ["Mild", "Elite", "Exceptionally high quality."],
    ["Mild", "Top tier", "Among the best."],
    ["Mild", "S-tier", "Highest ranking or quality."],
    ["Mild", "A-tier", "Very high quality."],
    ["Mild", "Goated behavior", "Exceptionally good behavior."],
    ["Mild", "W human", "Person who did something admirable."],
    ["Mild", "Common sense", "Ordinary practical reasoning."],
    ["Mild", "Zero thoughts", "Playful statement of having no ideas."],
    ["Mild", "Brain loading", "Playful expression of needing time to think."],
    ["Mild", "Loading", "Temporarily unable to think or respond."],
    ["Mild", "Buffering", "Temporarily slow to understand or respond."],
    ["Mild", "Lagging IRL", "Slow to react in real life."],
    ["Mild", "Knowledge diff", "Difference in knowledge."],
    ["Mild", "W brain", "Smart or insightful thinking."],
    ["Mild", "Big brain", "Clever idea or person."],
    ["Mild", "Galaxy brain", "Extremely elaborate idea."],
    ["Mild", "Brainiac moment", "Clever insight."],
    ["Mild", "Rookie mistake", "Common beginner error."],
    ["Mild", "Beginner's luck", "Unexpected success by a newcomer."],
    ["Mild", "Easy dub", "Easy victory."],
    ["Mild", "Free win", "Easy victory."],
    ["Mild", "Free real estate", "Easy opportunity or space."],
    ["Mild", "Low effort", "Requiring little work."],
    ["Mild", "High effort", "Requiring substantial work."],
    ["Mild", "Effortless", "Seemingly requiring little effort."],
    ["Mild", "Focused", "Concentrating strongly."],
    ["Mild", "Dialed in", "Highly focused."],
    ["Mild", "In the zone", "Performing with strong concentration."],
    ["Mild", "Productive era", "Period of strong productivity."],
    ["Mild", "Study grind", "Intensive period of studying."],
    ["Mild", "Exam arc", "Period centered around exams."],
    ["Mild", "Academic weapon", "Student who performs extremely well academically."],
    ["Mild", "Academic comeback", "Improvement after poor academic performance."],
    ["Mild", "Sleep deprived", "Lacking enough sleep."],
    ["Mild", "Running on fumes", "Continuing with very little energy."],
    ["Mild", "Exhausted", "Extremely tired."],
    ["Mild", "Spacing out", "Temporarily losing attention."],
    ["Mild", "Tuned out", "Stopped paying attention."],
    ["Mild", "Brain fog", "Temporary difficulty thinking clearly."],
    ["Mild", "Dead", "Very funny or surprising."],
    ["Mild", "Crying", "Humorous expression of amusement or emotion."],
    ["Mild", "Screaming", "Humorous expression of strong reaction."],
    ["Mild", "Shaking", "Humorous expression of excitement or surprise."],
    ["Mild", "Shook", "Very surprised."],
    ["Mild", "Mind blown", "Extremely surprised or impressed."],
    ["Mild", "Cold take", "Obvious or widely accepted opinion."],
    ["Mild", "W take", "Good opinion."],
    ["Mild", "Valid take", "Reasonable opinion."],
    ["Mild", "Controversial", "Likely to cause disagreement."],
    ["Mild", "Unpopular opinion", "Opinion not widely shared."],
    ["Mild", "Agree to disagree", "Accepting different opinions."],
    ["Mild", "Fair enough", "Acknowledgment that a point is reasonable."],
    ["Mild", "Valid point", "Reasonable argument."],
    ["Mild", "Fair", "Reasonable or acceptable."],
    ["Mild", "Respect", "Respectful acknowledgment."],
    ["Mild", "W respect", "Praise for someone's behavior."],
    ["Mild", "Massive respect", "Strong admiration."],
    ["Mild", "Props", "Praise or recognition."],
    ["Mild", "Shoutout", "Public acknowledgment or praise."],
    ["Mild", "Salute", "Expression of respect."],
    ["Mild", "Hat tip", "Acknowledgment or appreciation."],
    ["Mild", "Claps", "Praise or applause."],
    ["Mild", "Applause", "Expression of approval."],
    ["Mild", "W energy", "Positive and successful attitude."],
    ["Mild", "Positive aura", "Pleasant or confident presence."],
    ["Mild", "Aura merchant", "Person who appears unusually cool."],
    ["Mild", "Aura gain", "Playful increase in coolness."],
    ["Mild", "Unc aura", "Unusually cool presence."],
    ["Mild", "Unc", "Playful term for an older person."],
    ["Mild", "Old-school", "Traditional or from an earlier era."],
    ["Mild", "Retro", "Styled after an earlier era."],
    ["Mild", "Throwback", "Something from the past."],
    ["Mild", "Nostalgia", "Strong feeling about the past."],
    ["Mild", "Nostalgic", "Evoking memories of the past."],
    ["Mild", "Classic vibe", "Timeless familiar feeling."],
    ["Mild", "OG", "Original or longtime member."],
    ["Mild", "Original", "First or authentic version."],
    ["Mild", "OG status", "Recognition as an original or longtime participant."],
    ["Mild", "Real one", "Loyal or trustworthy person."],
    ["Mild", "Day one", "Longtime loyal friend or supporter."],
    ["Mild", "Solid", "Reliable or good."],
    ["Mild", "Reliable", "Dependable."],
    ["Mild", "Trustworthy", "Worthy of confidence."],
    ["Mild", "Legend", "Highly admired or memorable person."],
    ["Mild", "Legend behavior", "Extremely admirable action."],
    ["Mild", "Hero move", "Admirable helpful action."],
    ["Mild", "Big brain move", "Clever decision."],
    ["Mild", "200 IQ", "Humorous way to call something very clever."],
    ["Mild", "5D chess", "Very complicated strategic thinking."],
    ["Mild", "Chess move", "Strategic action."],
    ["Mild", "Strategic", "Carefully planned."],
    ["Mild", "Master plan", "Carefully designed plan."],
    ["Mild", "Plotting", "Planning something."],
    ["Mild", "Idea dump", "Sharing many ideas quickly."],
    ["Mild", "Brain dump", "Sharing many thoughts or notes."],
    ["Mild", "Info dump", "Sharing lots of information."],
    ["Mild", "Lore dump", "Sharing lots of background information."],
    ["Mild", "Storytime", "Introduction to a story."],
    ["Mild", "Tea time", "Time to discuss gossip or details."],
    ["Mild", "Proof", "Evidence supporting a claim."],
    ["Mild", "Source?", "Request for evidence or origin."],
    ["Mild", "Trust the process", "Encouragement to continue despite uncertainty."],
    ["Mild", "We're cooking", "Things are going well."],
    ["Mild", "Cooked perfectly", "Done exceptionally well."],
    ["Mild", "Served", "Delivered something impressive."],
    ["Mild", "Served and cleared", "Performed exceptionally well."],
    ["Mild", "Ate that up", "Performed extremely well."],
    ["Mild", "Devoured", "Performed extremely well."],
    ["Mild", "Feasted", "Performed exceptionally well."],
    ["Mild", "Cleaned up", "Performed very well."],
    ["Mild", "Crushed", "Defeated or completed something very well."],
    ["Mild", "MVP", "Most valuable player or contributor."],
    ["Mild", "MVP energy", "Behavior worthy of being the top contributor."],
    ["Mild", "GOAT status", "Recognition as one of the greatest."],
    ["Mild", "Hall of Fame", "Extremely memorable or excellent."],
    ["Mild", "Icon behavior", "Highly memorable behavior."],
    ["Mild", "Main event", "Most important part of an event."],
    ["Mild", "Opening act", "Less important introductory part."],
    ["Mild", "Final boss", "Most difficult challenge."],
    ["Mild", "Boss fight", "Difficult challenge."],
    ["Mild", "Mini boss", "Moderately difficult challenge."],
    ["Mild", "Quest", "Task or goal."],
    ["Mild", "Mission accomplished", "Successfully completed task."],
    ["Mild", "Achievement unlocked", "Humorous recognition of an accomplishment."],
    ["Mild", "Level up", "Improve or progress."],
    ["Mild", "XP", "Experience points or metaphorical experience."],
    ["Mild", "Grindset", "Focus on persistent effort."],
    ["Mild", "Hustle", "Work hard toward a goal."],
    ["Mild", "Hustling", "Working persistently."],
    ["Mild", "Monk mode", "Period of intense focus and reduced distraction."],
    ["Mild", "Social battery", "Mental energy for socializing."],
    ["Mild", "Introvert mode", "Desire for quiet or solitude."],
    ["Mild", "Extrovert mode", "High desire for social interaction."],
    ["Mild", "People person", "Someone who enjoys socializing."],
    ["Mild", "Social butterfly", "Very socially active person."],
    ["Mild", "Wallflower", "Quiet person who stays in the background."],
    ["Mild", "Awkward silence", "Uncomfortable lack of conversation."],
    ["Mild", "Crickets", "No response or reaction."],
    ["Mild", "BRB", "Be right back."],
    ["Mild", "BTW", "By the way."],
    ["Mild", "FYI", "For your information."],
    ["Mild", "LOL", "Laughing out loud."],
    ["Mild", "OMG", "Expression of surprise."],
    ["Mild", "OMW", "On my way."],
    ["Mild", "TTYL", "Talk to you later."],
    ["Mild", "GTG", "Got to go."],
    ["Mild", "NVM", "Never mind."],
    ["Mild", "WYD", "What are you doing."],
    ["Mild", "WYA", "Where are you."],
    ["Mild", "HMU", "Hit me up or contact me."],
    ["Mild", "ICYMI", "In case you missed it."],
    ["Mild", "TIL", "Today I learned."],
    ["Mild", "ELI5", "Explain simply."],
    ["Mild", "TLDR", "Short summary."],
    ["Mild", "ONG", "Expression meaning honestly or sincerely."],
    ["Mild", "IYKYK", "If you know you know."],
    ["Mild", "ASAP", "As soon as possible."],
    ["Mild", "GM", "Good morning."],
    ["Mild", "GN", "Good night."],
    ["Mild", "JK", "Just kidding."],
    ["Mild", "Meme", "Humorous internet content."],
    ["Mild", "Copypasta", "Repeated internet text or format."],
    ["Mild", "GIF", "Short looping animated image."],
    ["Mild", "Emoji", "Pictorial symbol used in messages."],
    ["Mild", "Story", "Temporary social media post."],
    ["Mild", "Post", "Content published online."],
    ["Mild", "Like", "Positive social media reaction."],
    ["Mild", "Comment", "Public response to a post."],
    ["Mild", "Reply", "Response to a message or post."],
    ["Mild", "Seen", "Message has been viewed."],
    ["Mild", "KK", "Casual acknowledgment."],
    ["Mild", "Yep", "Casual yes."],
    ["Mild", "Nah", "Casual no."],
    ["Mild", "Yessir", "Enthusiastic agreement."],
    ["Mild", "LFG", "Let's go; strong excitement."],
    ["Mild", "Let's go", "Expression of excitement or encouragement."],
    ["Mild", "We move", "Expression of continuing forward."],
    ["Mild", "We ball", "Playful statement about continuing confidently."],
    ["Mild", "Balling", "Doing well or enjoying success."],
    ["Mild", "Baller", "Person who is successful or skilled."],
    ["Mild", "Self-care", "Time spent caring for yourself."],
    ["Mild", "Reset", "Take time to recover and start fresh."],
    ["Mild", "Recharge", "Restore energy."],
    ["Mild", "Fresh start", "New beginning."],
    ["Mild", "New chapter", "New period of life or activity."],
    ["Mild", "Character arc", "Period of personal development."],
    ["Mild", "Redemption arc", "Period of improvement after mistakes."],
    ["Mild", "Comeback arc", "Period of returning after difficulty."],
    ["Mild", "Training arc", "Period of focused practice or improvement."],
    ["Mild", "Origin story", "Background explaining how someone started."],
    ["Mild", "Lore accurate", "Consistent with established background."],
    ["Mild", "Canonically", "According to established story or facts."],
    ["Mild", "Headcanon", "Personal interpretation not officially confirmed."],
    ["Mild", "AU", "Alternate universe version of a story."],
    ["Mild", "OC", "Original character."],
    ["Mild", "Edit", "Fan-made video or image montage."],
    ["Mild", "Inside joke", "Joke understood by a particular group."],
    ["Mild", "Niche", "Focused on a small specialized group."],
    ["Mild", "Deep cut", "Obscure reference or piece of media."],
    ["Mild", "Rabbit hole", "Long chain of exploration or research."],
    ["Mild", "Digital detox", "Break from digital devices."],
    ["Mild", "Internet brain", "Thinking heavily influenced by online culture."],
    ["Mild", "Algorithm", "The system deciding what content users see."],
    ["Mild", "Trending", "Currently receiving widespread attention."],
    ["Mild", "Trendsetter", "Person who starts or popularizes trends."],
    ["Mild", "Unique", "Distinctive or uncommon."],
    ["Mild", "One-of-one", "Completely unique."],
    ["Mild", "Rare", "Uncommon or special."],
    ["Mild", "Statement piece", "Distinctive item that draws attention."],
    ["Mild", "OOTD", "Outfit of the day."],
    ["Mild", "GRWM", "Get ready with me."],
    ["Mild", "Face card", "Playful praise for facial appearance."],
    ["Mild", "Face card never declines", "Consistently looks good."],
    ["Mild", "Looks good", "Positive appearance comment."],
    ["Mild", "Serving looks", "Looking especially stylish."],
    ["Mild", "Looking fresh", "Looking stylish or well-presented."],
    ["Mild", "Aesthetic goals", "Style worth emulating."],
    ["Mild", "Goals", "Something desirable or admirable."],
    ["Mild", "Friendship goals", "Ideal friendship dynamic."],
    ["Mild", "Couple goals", "Ideal relationship dynamic."],
    ["Mild", "Team goals", "Ideal group dynamic."],
    ["Mild", "Dream setup", "Ideal arrangement of equipment or space."],
    ["Mild", "Dream life", "Ideal lifestyle."],
    ["Mild", "Living the dream", "Enjoying an ideal situation."],
    ["Mild", "Manifest", "Focus on desired future outcome."],
    ["Mild", "Delulu is the solulu", "Playful phrase saying optimism is the solution."],
    ["Mild", "Solulu", "Playful abbreviation of solution."],
    ["Mild", "Reality check", "Reminder of actual circumstances."],
    ["Mild", "Wake-up call", "Event that forces recognition of reality."],
    ["Mild", "Humbling", "Experience that reduces overconfidence."],
    ["Mild", "Fact check", "Verification of a claim."],
    ["Mild", "On point", "Accurate or excellent."],
    ["Mild", "Spot on", "Exactly correct."],
    ["Mild", "Keeping it real", "Being honest and authentic."],
    ["Mild", "Authentic", "Genuine and not fake."],
    ["Mild", "Comfort character", "Fictional character someone finds comforting."],
    ["Mild", "Comfort show", "Show watched for familiarity or relaxation."],
    ["Mild", "Comfort food", "Food associated with emotional comfort."],
    ["Mild", "Safe space", "Place or environment where someone feels comfortable."],
    ["Mild", "Chill", "Relaxed or calm."],
    ["Mild", "Chill vibes", "Relaxed atmosphere."],
    ["Mild", "Unbothered", "Not visibly affected by something."],
    ["Mild", "All good", "No problem."],
    ["Mild", "No worries", "Reassurance that something is okay."],
    ["Mild", "Gotchu", "I've got you or I'll help."],
    ["Mild", "Preach", "Strong agreement with a statement."],
    ["Mild", "Chef's kiss", "Perfect or highly satisfying."],
    ["Mild", "Flawless", "Without flaws."],
    ["Mild", "Immaculate", "Extremely clean or perfect."],
    ["Mild", "Buttery smooth", "Extremely smooth."],
    ["Mild", "Oddly satisfying", "Unexpectedly satisfying."],
    ["Mild", "Smart move", "Good decision."],
    ["Mild", "Good call", "Good decision."],
    ["Mild", "Bold move", "Brave or surprising action."],
    ["Mild", "Power move", "Confident strategic action."],
    ["Mild", "Pro move", "Skilled or clever action."],
    ["Mild", "Textbook", "Perfect example of something."],
    ["Mild", "Drop", "Release or publish something."],
    ["Mild", "Link up", "Meet or connect."],
    ["Mild", "Pull up", "Arrive or come over."],
    ["Mild", "Dip", "Leave."],
    ["Mild", "Bounce", "Leave."],
    ["Mild", "Peace", "Goodbye."],
    ["Mild", "Catch you later", "Goodbye."],
    ["Mild", "Take care", "Friendly goodbye."],
    ["Mild", "Stay safe", "Friendly safety reminder."],
    ["Mild", "You got this", "Encouragement."],
    ["Mild", "Light work", "Easy task."],
    ["Mild", "No sweat", "Easy or not difficult."],
    ["Mild", "Piece of cake", "Very easy."],
    ["Mild", "Cakewalk", "Very easy task."],
    ["Mild", "Victory lap", "Celebration after success."],
    ["Mild", "Winning streak", "Series of successes."],
    ["Mild", "Bounce back", "Recover after difficulty."],
    ["Mild", "Academic comeback", "Improving after poor results."],
    ["Mild", "Library grind", "Intensive study session."],
    ["Mild", "Study buddy", "Friend who studies with you."],
    ["Mild", "Study squad", "Group studying together."],
    ["Mild", "Boss battle", "Challenging task."],
    ["Mild", "Clutch save", "Important rescue at a crucial moment."],
    ["Mild", "Life saver", "Someone or something that helps greatly."],
    ["Mild", "Hero", "Someone who helps or performs admirably."],
    ["Mild", "Cult classic", "Work with a dedicated niche following."],
    ["Mild", "Fan favorite", "Particularly popular among fans."],
    ["Mild", "Instant classic", "Quickly becoming memorable."],
    ["Mild", "10/10", "Very high rating."],
    ["Mild", "11/10", "Humorous rating above the normal scale."],
    ["Mild", "100/10", "Exaggerated top rating."],
    ["Mild", "Peak vibes", "Excellent atmosphere."],
    ["Mild", "Immaculate vibes", "Excellent atmosphere."],
    ["Mild", "Good stuff", "Praise for something enjoyable."],
    ["Mild", "Solid stuff", "Praise for reliable quality."],
    ["Mild", "Nice one", "Praise for a good action."],
    ["Mild", "Good one", "Praise for a good idea or joke."],
    ["Mild", "Easter egg", "Hidden reference or detail."],
    ["Mild", "Callback", "Return to an earlier joke or detail."],
    ["Mild", "Foreshadowing", "Earlier detail hinting at future events."],
    ["Mild", "DND", "Do not disturb."],
    ["Mild", "Social mode", "Ready to interact."],
    ["Mild", "Yap mode", "Period of excessive talking."],

    // ==========================================
    // MEDIUM
    // ==========================================
    ["Medium", "Certified yapper", "Someone who can turn one sentence into a podcast."],
    ["Medium", "Professional menace", "Somehow responsible for every bit of chaos."],
    ["Medium", "Chronically unserious", "Cannot behave normally for five consecutive minutes."],
    ["Medium", "Absolute donut", "A silly British-style insult for foolish behavior."],
    ["Medium", "Room-temperature IQ", "Sarcastic roast for a truly questionable idea."],
    ["Medium", "Main-character delusion", "Acting like the universe is your personal movie."],
    ["Medium", "Dumbass", "Someone who made an exceptionally poor decision."],
    ["Medium", "Bastard", "Sharp insult for an obnoxious or unpleasant person."],
    ["Medium", "Bloody idiot", "Common exasperated roast for senseless actions."],
    ["Medium", "Bloody fool", "Sharper emphasis on complete foolishness."],
    ["Medium", "Damn fool", "Classic reprimand for making a terrible choice."],
    ["Medium", "Scumbag", "A thoroughly untrustworthy or repulsive person."],
    ["Medium", "Asshole", "Abrasive, arrogant, and blatantly rude behavior."],
    ["Medium", "Dickhead", "Sharp slang for an irritating or aggressive jerk."],
    ["Medium", "Prick", "Pungent label for an obnoxious, spiteful individual."],
    ["Medium", "Sus", "Suspicious or questionable."],
    ["Medium", "Clown", "Someone acting foolishly."],
    ["Medium", "Mid", "Average or unimpressive."],
    ["Medium", "Bruh", "Expression of disbelief or annoyance."],
    ["Medium", "Delulu", "Delusional or unrealistically hopeful."],
    ["Medium", "Simp", "Someone overly devoted to another person."],
    ["Medium", "Salty", "Upset or resentful."],
    ["Medium", "Pressed", "Annoyed or bothered."],
    ["Medium", "Triggered", "Strongly annoyed or upset."],
    ["Medium", "Cringe", "Embarrassing or awkward."],
    ["Medium", "NPC", "Someone behaving predictably or without originality."],
    ["Medium", "Ratio", "Getting more negative reactions than the original post."],
    ["Medium", "Ratioed", "Receiving stronger engagement against you than for you."],
    ["Medium", "Caught in 4K", "Caught clearly doing something."],
    ["Medium", "Rent free", "Occupying someone's thoughts without effort."],
    ["Medium", "Chronically online", "Overly immersed in internet culture."],
    ["Medium", "Brainrot", "Absurd internet content or excessive online immersion."],
    ["Medium", "Brainrotted", "Heavily influenced by absurd internet content."],
    ["Medium", "Periodt", "Emphatic way to say that's final."],
    ["Medium", "Ghost", "Stop responding to someone."],
    ["Medium", "Ghosted", "Stopped responding without explanation."],
    ["Medium", "Left on read", "Seen a message without replying."],
    ["Medium", "Situationship", "Unclear relationship without defined status."],
    ["Medium", "Ate and left no crumbs", "Performed exceptionally well."],
    ["Medium", "Killed it", "Performed extremely well."],
    ["Medium", "Different breed", "Unusually impressive person."],
    ["Medium", "Beast", "Highly skilled or powerful person."],
    ["Medium", "Monster", "Extremely skilled performer."],
    ["Medium", "Absolute unit", "Remarkably large or powerful thing or person."],
    ["Medium", "L move", "Bad decision or action."],
    ["Medium", "Take the L", "Accept a loss or mistake."],
    ["Medium", "Common L", "Expected negative outcome."],
    ["Medium", "Rare L", "Unusual failure."],
    ["Medium", "Skill issue", "Teasing someone about lacking ability."],
    ["Medium", "Git gud", "Teasing phrase meaning improve your skills."],
    ["Medium", "Sweaty", "Overly competitive."],
    ["Medium", "Tryhard", "Someone who puts excessive effort into winning."],
    ["Medium", "Rage quit", "Leave because of frustration."],
    ["Medium", "Noob", "Beginner or inexperienced player."],
    ["Medium", "Sweat", "Highly competitive player."],
    ["Medium", "Main character syndrome", "Acting as though everything revolves around you."],
    ["Medium", "Glow-down", "Playful phrase for a negative change."],
    ["Medium", "Basic", "Unoriginal or conventional."],
    ["Medium", "Extra", "Overly dramatic or elaborate."],
    ["Medium", "Bougie", "Fancy or overly concerned with luxury."],
    ["Medium", "Boujee", "Luxurious or fancy."],
    ["Medium", "Aesthetic AF", "Very visually appealing."],
    ["Medium", "Wholesome AF", "Extremely heartwarming."],
    ["Medium", "Dork", "Awkward or overly nerdy person."],
    ["Medium", "Weirdo", "Person behaving unusually."],
    ["Medium", "Dingus", "Playful insult for a foolish person."],
    ["Medium", "Doofus", "Playful insult for someone acting foolishly."],
    ["Medium", "Mess", "Person or situation that is disorganized."],
    ["Medium", "Insane", "Extremely surprising or impressive."],
    ["Medium", "Crazy", "Extreme or surprising."],
    ["Medium", "Nuts", "Extremely surprising."],
    ["Medium", "Bonkers", "Very strange or surprising."],
    ["Medium", "Ridiculous", "Extremely unreasonable or silly."],
    ["Medium", "Wilding", "Behaving in an uncontrolled or surprising way."],
    ["Medium", "Out of pocket", "Unexpectedly inappropriate or bold."],
    ["Medium", "Doing too much", "Overdoing something."],
    ["Medium", "Deadass", "Very seriously or genuinely."],
    ["Medium", "Valid AF", "Extremely reasonable."],
    ["Medium", "Fire AF", "Extremely impressive."],
    ["Medium", "Hypebeast", "Person obsessed with trendy brands or items."],
    ["Medium", "Failed the vibe check", "Behaved unpleasantly or awkwardly."],
    ["Medium", "Who let bro cook", "Playfully question a questionable idea."],
    ["Medium", "Side character", "Person perceived as less central."],
    ["Medium", "One brain cell", "Playful phrase for poor thinking."],
    ["Medium", "What is bro doing", "Playfully questioning someone's actions."],
    ["Medium", "Bro thinks he's", "Teasing someone for acting like a famous or fictional person."],
    ["Medium", "Bro fell off", "Playful statement that someone became less impressive."],
    ["Medium", "Fell off", "Became less successful or impressive."],
    ["Medium", "Washed", "No longer performing as well as before."],
    ["Medium", "Choke", "Fail under pressure."],
    ["Medium", "Choked", "Failed under pressure."],
    ["Medium", "Throw", "Deliberately or carelessly cause failure."],
    ["Medium", "Throwing", "Playing badly enough to cause failure."],
    ["Medium", "Troll", "Person who provokes reactions online."],
    ["Medium", "Trolling", "Deliberately provoking people for fun."],
    ["Medium", "Bait", "Content designed to provoke a reaction."],
    ["Medium", "Ragebait", "Content designed to make people angry."],
    ["Medium", "Clout", "Online influence or attention."],
    ["Medium", "Clout chaser", "Person seeking attention or influence."],
    ["Medium", "Attention seeker", "Person seeking attention."],
    ["Medium", "Stan", "Very devoted fan."],
    ["Medium", "Fanboy", "Overly enthusiastic male fan."],
    ["Medium", "Fangirl", "Overly enthusiastic female fan."],
    ["Medium", "Red flag", "Warning sign in behavior or situation."],
    ["Medium", "Ick", "Sudden feeling of dislike or embarrassment."],
    ["Medium", "The ick", "Sudden loss of attraction or enthusiasm."],
    ["Medium", "Ick-worthy", "Likely to cause the ick."],
    ["Medium", "Friendzone", "Perceived lack of romantic interest from a friend."],
    ["Medium", "Ghosting", "Stopping communication without explanation."],
    ["Medium", "Breadcrumbing", "Giving minimal attention to keep someone interested."],
    ["Medium", "Orbiting", "Watching someone's online activity without communicating."],
    ["Medium", "Chaos gremlin", "Playfully chaotic person."],
    ["Medium", "Feral", "Behaving wildly or uncontrollably."],
    ["Medium", "Bro really said", "Teasing reaction to someone's statement."],
    ["Medium", "Bro really thought", "Teasing someone for a mistaken belief."],
    ["Medium", "Bro thought", "Shortened teasing reaction to someone's assumption."],
    ["Medium", "L human", "Playful criticism of poor behavior."],
    ["Medium", "Skill diff", "Difference in ability."],
    ["Medium", "Brain diff", "Playful claim of superior thinking."],
    ["Medium", "Common sense diff", "Playful criticism of someone's reasoning."],
    ["Medium", "Smooth brain", "Playful insult implying poor reasoning."],
    ["Medium", "Tiny brain", "Playful insult about a silly mistake."],
    ["Medium", "Sweating", "Playing with extreme effort."],
    ["Medium", "Academic victim", "Playful phrase for struggling academically."],
    ["Medium", "Dead tired", "Extremely tired."],
    ["Medium", "Zoned out", "Not paying attention."],
    ["Medium", "Over it", "Tired of or annoyed by something."],
    ["Medium", "Done", "Finished or no longer willing to continue."],
    ["Medium", "I'm dead", "Humorous reaction to something extremely funny."],
    ["Medium", "Shooketh", "Playful exaggerated form of shook."],
    ["Medium", "Wild take", "Unusual opinion."],
    ["Medium", "Hot take", "Deliberately provocative opinion."],
    ["Medium", "Bad take", "Poor or unpopular opinion."],
    ["Medium", "L take", "Poor opinion."],
    ["Medium", "Ratio take", "Opinion likely to attract disagreement."],
    ["Medium", "L energy", "Negative or unsuccessful attitude."],
    ["Medium", "Negative aura", "Unpleasant or awkward presence."],
    ["Medium", "Aura farming", "Deliberately acting cool for attention."],
    ["Medium", "Aura loss", "Playful loss of coolness."],
    ["Medium", "Oldhead", "Older or old-fashioned person."],
    ["Medium", "Ride or die", "Extremely loyal friend."],
    ["Medium", "Scheming", "Planning something secretly."],
    ["Medium", "Trust me bro", "Humorous claim without evidence."],
    ["Medium", "Dominated", "Performed far better than others."],
    ["Medium", "Owned", "Completely outperformed someone."],
    ["Medium", "Destroyed", "Performed overwhelmingly well."],
    ["Medium", "Smoked", "Defeated decisively."],
    ["Medium", "Folded", "Backed down or gave up."],
    ["Medium", "Folded instantly", "Gave up immediately."],
    ["Medium", "Sold", "Performed badly or lost an advantage."],
    ["Medium", "Sold the bag", "Ruined a good opportunity."],
    ["Medium", "Fumbled", "Mishandled an opportunity."],
    ["Medium", "Fumbled the bag", "Ruined a valuable opportunity."],
    ["Medium", "Hall of Shame", "Humorous collection of embarrassing moments."],
    ["Medium", "IDC", "I don't care."],
    ["Medium", "LMAO", "Very strong laughter."],
    ["Medium", "ROFL", "Rolling on the floor laughing."],
    ["Medium", "AF", "Very or extremely."],
    ["Medium", "ASF", "Very or extremely."],
    ["Medium", "ISTG", "I swear to God."],
    ["Medium", "SMH", "Shaking my head."],
    ["Medium", "FML", "Expression of frustration."],
    ["Medium", "Shitpost", "Deliberately absurd low-seriousness post."],
    ["Medium", "Shitposting", "Creating intentionally absurd posts."],
    ["Medium", "Burner account", "Secondary account used for limited identity exposure."],
    ["Medium", "Subtweet", "Indirect post referring to someone."],
    ["Medium", "Dry texting", "Replying with very short unengaged messages."],
    ["Medium", "Dry texter", "Person who sends minimal replies."],
    ["Medium", "K", "Short acknowledgment that can sound dismissive."],
    ["Medium", "Doomscroll", "Scroll through negative content for a long time."],
    ["Medium", "Doomscrolling", "Habitual scrolling through upsetting content."],
    ["Medium", "Shadowban", "Believed reduction in content visibility."],
    ["Medium", "Clout farming", "Creating content mainly to gain attention."],
    ["Medium", "Copycat", "Person or thing that imitates another."],
    ["Medium", "Clone", "Very similar imitation."],
    ["Medium", "Ripoff", "Poor imitation or unfairly copied product."],
    ["Medium", "Knockoff", "Unauthorized imitation."],
    ["Medium", "Flex", "Show off something proudly."],
    ["Medium", "Flexing", "Showing off."],
    ["Medium", "Hard flex", "Obvious show-off."],
    ["Medium", "Brag", "Boast about an achievement."],
    ["Medium", "Show-off", "Person who displays achievements or possessions."],
    ["Medium", "Humblebrag", "Disguised brag."],
    ["Medium", "Corny", "Overly cheesy or predictable."],
    ["Medium", "Tacky", "Showy in a poor-taste way."],
    ["Medium", "NPC-coded", "Appearing predictable or generic."],
    ["Medium", "Copium", "Humorous imaginary substance representing denial."],
    ["Medium", "Hopium", "Humorous imaginary substance representing excessive hope."],
    ["Medium", "Cope", "Deal with disappointment."],
    ["Medium", "Denial", "Refusal to accept reality."],
    ["Medium", "Fake news", "False information presented as news."],
    ["Medium", "Cap", "Lie or exaggeration."],
    ["Medium", "Capping", "Lying or exaggerating."],
    ["Medium", "Cap detected", "Humorous accusation of lying."],
    ["Medium", "Lying", "Not telling the truth."],
    ["Medium", "Caught lying", "Discovered to be dishonest."],
    ["Medium", "Caught lacking", "Caught unprepared."],
    ["Medium", "Caught slipping", "Caught making a mistake or being careless."],
    ["Medium", "Bothered", "Annoyed or affected."],
    ["Medium", "Heated", "Angry or intensely excited."],
    ["Medium", "Fed up", "Tired and annoyed with something."],
    ["Medium", "Done with it", "No longer willing to continue."],
    ["Medium", "Not it", "Not good or not appealing."],
    ["Medium", "It's not giving", "Doesn't create the desired vibe."],
    ["Medium", "Vibe killer", "Something that ruins the atmosphere."],
    ["Medium", "Buzzkill", "Person or thing that ruins excitement."],
    ["Medium", "Party pooper", "Person who reduces enjoyment."],
    ["Medium", "Fun police", "Person who discourages fun."],
    ["Medium", "Mood killer", "Something that ruins the mood."],
    ["Medium", "Cringey", "Causing embarrassment."],
    ["Medium", "Embarrassing", "Causing shame or discomfort."],
    ["Medium", "Secondhand embarrassment", "Embarrassment felt for someone else."],
    ["Medium", "Secondhand cringe", "Cringe experienced on behalf of someone else."],
    ["Medium", "Yikes", "Expression of discomfort or concern."],
    ["Medium", "Brain fart", "Temporary silly mistake."],
    ["Medium", "L behavior", "Playful criticism of behavior."],
    ["Medium", "Sketchy", "Suspicious or unsafe-looking."],
    ["Medium", "Shady", "Suspicious or dishonest-looking."],
    ["Medium", "Fishy", "Suspicious or questionable."],
    ["Medium", "Dodgy", "Unreliable or suspicious."],
    ["Medium", "Painfully relatable", "Very relatable in an uncomfortable way."],
    ["Medium", "Certified L", "Clearly unsuccessful outcome."],
    ["Medium", "L certified", "Approved as unsuccessful or bad."],
    ["Medium", "Overrated", "Praised more than deserved."],
    ["Medium", "L decision", "Bad decision."],
    ["Medium", "Questionable move", "Dubious action."],
    ["Medium", "Rookie move", "Beginner-like action."],
    ["Medium", "NPC move", "Predictable or generic action."],
    ["Medium", "Villain move", "Playfully ruthless or bold action."],
    ["Medium", "Spoiler", "Information revealing an important plot detail."],
    ["Medium", "Team diff", "Playful claim that one team was much better."],
    ["Medium", "Hard carry", "Perform almost all the important work."],
    ["Medium", "Exploit", "Method of using a flaw for advantage."],
    ["Medium", "Int", "Deliberately or foolishly die in a game."],
    ["Medium", "Feeding", "Giving opponents repeated advantages."],
    ["Medium", "Tilted", "Frustrated during gameplay."],
    ["Medium", "Tilting", "Becoming frustrated."],
    ["Medium", "Rage", "Extreme frustration."],
    ["Medium", "Outclassed", "Clearly inferior to an opponent."],
    ["Medium", "Steamrolled", "Defeated extremely easily."],
    ["Medium", "Rolled", "Defeated easily."],
    ["Medium", "Stomped", "Defeated decisively."],
    ["Medium", "Exam victim", "Playful term for someone struggling with exams."],
    ["Medium", "Failed vibe check", "Disapproved behavior."],
    ["Medium", "Painfully real", "Uncomfortably relatable."],
    ["Medium", "Caught red-handed", "Caught while doing something wrong."],
    ["Medium", "Exposed", "Revealed or shown to be wrong."],
    ["Medium", "Called out", "Publicly criticized for behavior."],
    ["Medium", "Callout", "Public criticism."],
    ["Medium", "Ghost mode", "Not responding or being socially unavailable."],
    ["Medium", "L mode", "State of failure."],
    ["Medium", "Cope mode", "Humorous state of dealing with disappointment."],
    ["Medium", "Unhinged mode", "Wild unconventional state."],

    // ==========================================
    // STRONG
    // ==========================================
    ["Strong", "Walking L", "Slang for a spectacularly bad move."],
    ["Strong", "Certified flop", "A humorous label for a failed attempt."],
    ["Strong", "Touch grass", "Blunt internet slang for taking a break from the screen."],
    ["Strong", "Chaos goblin", "Someone powered entirely by disorder."],
    ["Strong", "Human loading screen", "Someone taking unusually long to understand something."],
    ["Strong", "Bro downloaded confidence on 2% battery", "Maximum confidence, minimum preparation."],
    ["Strong", "Douchebag", "Obnoxious, entitled, and universally disliked."],
    ["Strong", "Bullshit", "Calling out total nonsense and deception."],
    ["Strong", "Fuckwit", "Severe put-down for an utterly clueless individual."],
    ["Strong", "Motherfucker", "Heavy-duty vulgar insult for extreme irritation."],
    ["Strong", "Son of a bitch", "Classic aggressive expression of pure contempt."],
    ["Strong", "Dunce", "Old-fashioned insult implying complete foolishness."],
    ["Strong", "Unhinged", "Extremely wild or unconventional."],
    ["Strong", "Massive L", "Major failure or disappointment."],
    ["Strong", "Washed up", "No longer successful or effective."],
    ["Strong", "Walking red flag", "Person displaying many warning signs."],
    ["Strong", "Sus AF", "Very suspicious."],
    ["Strong", "Mid AF", "Very average or disappointing."],
    ["Strong", "Fuming", "Extremely angry."],
    ["Strong", "Choked hard", "Failed badly under pressure."],
    ["Strong", "Threw hard", "Caused a major loss through mistakes."],
    ["Strong", "Terminally online", "Extremely immersed in internet culture."],

    // ==========================================
    // BRITISH
    // ==========================================
    ["British", "Bloody hell", "Classic British exclamation of disbelief and shock."],
    ["British", "Bloody bastard", "Heavily accented insult for an annoying person."],
    ["British", "Bugger", "Colloquial British term for a nuisance or pest."],
    ["British", "Sod", "Slang for an annoying, foolish, or unfortunate person."],
    ["British", "Wanker", "Quintessential British slang for a pretentious idiot."],
    ["British", "Tosser", "Sharp British slang for an obnoxious fool."]
];


/* ==========================================
   APP LOGIC
   ========================================== */

const PAGE_SIZE = 48;
const $ = (id) => document.getElementById(id);

const grid = $("grid"), search = $("search"), filters = $("filters");
const empty = $("empty"), toast = $("toast"), loadMore = $("loadMore");
const randomRoast = $("randomRoast"), randomMeaning = $("randomMeaning");
const randomUsage = $("randomUsage"), resultCount = $("resultCount");
const sortSel = $("sort");

const TONE = {
    Mild: "Safe for friends, group chats and comments.",
    Medium: "Spicy. Best with people who can take a joke.",
    Strong: "Harsh. Only use with someone who is clearly in on it.",
    British: "Classic British banter. Delivered with a straight face."
};

let active = "All", current = "", shown = PAGE_SIZE, toastTimer, shuffled = null;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const find = (phrase) => roasts.find((r) => r[1] === phrase);

/* ---------- Safe storage ---------- */
const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } }
};
let favs = new Set(store.get("rv_favs", []));
let copies = store.get("rv_copies", {});
let best = store.get("rv_best", 0);

/* ---------- Toast ---------- */
function showToast(msg = "Copied 💀") {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 1400);
}

/* ---------- Copy / Share / Save ---------- */
async function copyText(text, msg) {
    try { await navigator.clipboard.writeText(text); }
    catch {
        const ta = document.createElement("textarea");
        ta.value = text; ta.style.cssText = "position:fixed;opacity:0";
        document.body.appendChild(ta); ta.select();
        document.execCommand("copy"); ta.remove();
    }
    showToast(msg);
}

function trackCopy(phrase) {
    copies[phrase] = (copies[phrase] || 0) + 1;
    store.set("rv_copies", copies);
    renderTrending();
}

function copyPhrase(phrase) {
    current = phrase;
    copyText(phrase);
    trackCopy(phrase);
}

async function sharePhrase(phrase) {
    const r = find(phrase);
    const url = `${location.origin}${location.pathname}?q=${encodeURIComponent(phrase)}`;
    const text = `"${phrase}"${r ? ": " + r[2] : ""}`;
    if (navigator.share) {
        try { await navigator.share({ title: "Roast Vault 💀", text, url }); return; }
        catch (e) { if (e.name === "AbortError") return; }
    }
    copyText(`${text} ${url}`, "Link copied 🔗");
}

function toggleFav(phrase) {
    favs.has(phrase) ? favs.delete(phrase) : favs.add(phrase);
    store.set("rv_favs", [...favs]);
    showToast(favs.has(phrase) ? "Saved ❤️" : "Removed");
    updateSaveBtn();
    render();
}

function updateSaveBtn() {
    const on = current && favs.has(current);
    $("saveBtn").setAttribute("aria-pressed", !!on);
    $("saveBtn").textContent = on ? "SAVED ❤️" : "SAVE 🤍";
    const fb = filters.querySelector('[data-cat="Favorites"]');
    if (fb) fb.textContent = `❤️ Favorites (${favs.size})`;
}

/* ---------- Filters ---------- */
["All", "Mild", "Medium", "Strong", "British", "Favorites"].forEach((cat) => {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.cat = cat;
    b.className = "filter" + (cat === "All" ? " active" : "");
    b.textContent = cat;
    b.setAttribute("aria-pressed", cat === "All");
    b.addEventListener("click", () => {
        active = cat;
        filters.querySelectorAll(".filter").forEach((x) => {
            x.classList.toggle("active", x === b);
            x.setAttribute("aria-pressed", x === b);
        });
        render(true);
    });
    filters.appendChild(b);
});

function filteredRoasts() {
    const q = search.value.toLowerCase().trim();
    let list = roasts.filter(([cat, phrase, meaning]) =>
        (active === "All" || (active === "Favorites" ? favs.has(phrase) : cat === active)) &&
        (!q || `${phrase} ${meaning}`.toLowerCase().includes(q)));
    if (sortSel.value === "az") list = [...list].sort((a, b) => a[1].localeCompare(b[1]));
    if (sortSel.value === "shuffle") {
        shuffled = shuffled || new Map(roasts.map((r) => [r, Math.random()]));
        list = [...list].sort((a, b) => shuffled.get(a) - shuffled.get(b));
    }
    return list;
}

/* ---------- Cards ---------- */
function render(reset = false) {
    if (reset) shown = PAGE_SIZE;
    const data = filteredRoasts();
    const vis = data.slice(0, shown);

    grid.innerHTML = vis.map(([cat, phrase, meaning], i) => `
        <article class="card" style="--i:${i % PAGE_SIZE}" data-phrase="${esc(phrase)}">
            <span class="badge">${esc(cat)} // ROAST</span>
            <h3 class="phrase">${esc(phrase)}</h3>
            <p class="meaning">${esc(meaning)}</p>
            <div class="card-actions">
                <button type="button" class="copy" data-act="copy">Copy 📋</button>
                <button type="button" class="icon-btn" data-act="fav" aria-pressed="${favs.has(phrase)}"
                    aria-label="${favs.has(phrase) ? "Remove from" : "Add to"} favorites">${favs.has(phrase) ? "❤️" : "🤍"}</button>
                <button type="button" class="icon-btn" data-act="share" aria-label="Share ${esc(phrase)}">🔗</button>
            </div>
        </article>`).join("");

    empty.hidden = data.length > 0;
    empty.textContent = active === "Favorites" && !favs.size
        ? "No favorites yet. Tap 🤍 on any card 💀" : "No matching chaos found 💀";
    loadMore.hidden = shown >= data.length;
    resultCount.textContent = data.length ? `Showing ${vis.length} of ${data.length}` : "";
    updateSaveBtn();
}

grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-act]");
    if (!btn) return;
    const phrase = btn.closest(".card").dataset.phrase;
    ({ copy: copyPhrase, fav: toggleFav, share: sharePhrase })[btn.dataset.act](phrase);
});
loadMore.addEventListener("click", () => { shown += PAGE_SIZE; render(); });

/* ---------- Random generator ---------- */
function generateRoast() {
    const f = filteredRoasts();
    const data = f.length ? f : roasts;
    const [cat, phrase, meaning] = data[Math.floor(Math.random() * data.length)];
    current = phrase;
    randomRoast.textContent = phrase;
    randomMeaning.innerHTML = `<strong>Meaning:</strong> ${esc(meaning)}`;
    randomUsage.innerHTML = `<strong>${esc(cat)}:</strong> ${esc(TONE[cat] || "")}`;
    updateSaveBtn();
}
const needCurrent = () => { if (!current) generateRoast(); return current; };

$("generateBtn").addEventListener("click", generateRoast);
$("copyBtn").addEventListener("click", () => copyPhrase(needCurrent()));
$("shareBtn").addEventListener("click", () => sharePhrase(needCurrent()));
$("saveBtn").addEventListener("click", () => toggleFav(needCurrent()));

/* ---------- Roast of the day ---------- */
const today = new Date().toISOString().slice(0, 10);
let hash = 0;
for (const c of today) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
const daily = roasts[hash % roasts.length];
$("dailyPhrase").textContent = daily[1];
$("dailyMeaning").textContent = daily[2];
$("dailyCopy").addEventListener("click", () => copyPhrase(daily[1]));
$("dailyShare").addEventListener("click", () => sharePhrase(daily[1]));

/* ---------- Guess the meaning game ---------- */
let streak = 0, answer = "", locked = false;
const pick = () => roasts[Math.floor(Math.random() * roasts.length)];

function nextQuestion() {
    locked = false;
    const q = pick();
    answer = q[2];
    const opts = new Set([q[2]]);
    while (opts.size < 4) opts.add(pick()[2]);
    const list = [...opts].sort(() => Math.random() - 0.5);
    $("quizQ").textContent = q[1];
    $("quizOptions").innerHTML = list.map((m) =>
        `<button type="button" class="quiz-opt" data-m="${esc(m)}">${esc(m)}</button>`).join("");
    $("quizScore").textContent = `Streak: ${streak} · Best: ${best}`;
}

$("quizOptions").addEventListener("click", (e) => {
    const b = e.target.closest(".quiz-opt");
    if (!b || locked) return;
    locked = true;
    const ok = b.dataset.m === answer;
    streak = ok ? streak + 1 : 0;
    if (streak > best) { best = streak; store.set("rv_best", best); }
    document.querySelectorAll(".quiz-opt").forEach((o) => {
        if (o.dataset.m === answer) o.classList.add("right");
    });
    if (!ok) b.classList.add("wrong");
    $("quizScore").textContent = (ok ? "✅ Correct! " : "❌ Nope. ") + `Streak: ${streak} · Best: ${best}`;
    setTimeout(nextQuestion, 1400);
});

/* ---------- Your most copied ---------- */
function renderTrending() {
    const top = Object.entries(copies).sort((a, b) => b[1] - a[1]).slice(0, 6);
    $("trendingWrap").hidden = !top.length;
    $("trendingChips").innerHTML = top.map(([p, n]) =>
        `<button type="button" class="chip" data-q="${esc(p)}">${esc(p)} <span>×${n}</span></button>`).join("");
}
$("trendingChips").addEventListener("click", (e) => {
    const c = e.target.closest(".chip");
    if (!c) return;
    search.value = c.dataset.q;
    render(true);
    search.scrollIntoView({ behavior: "smooth", block: "center" });
});

/* ---------- Search, sort, shortcuts ---------- */
let t;
search.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => render(true), 150); });
sortSel.addEventListener("change", () => render(true));

document.addEventListener("keydown", (e) => {
    const typing = /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName);
    if (typing || e.ctrlKey || e.metaKey) return;
    if (e.key === "/") { e.preventDefault(); search.focus(); }
    if (e.key.toLowerCase() === "g") generateRoast();
});

/* ---------- Deep link: ?q=phrase ---------- */
const qParam = new URLSearchParams(location.search).get("q");
if (qParam) search.value = qParam;

renderTrending();
nextQuestion();
render(true);


