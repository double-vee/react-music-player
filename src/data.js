import { v4 as uuidv4 } from "uuid";

const data = () => {
  return [
    {
      title: "Just Wondering",
      artist: "Maarten Schellekens",
      audio:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/QvCK3uK36dJdrwVAwaSq0yPt1Tyh0HAONrgW71JF.mp3",
      cover:
        "https://freemusicarchive.org/image?file=image%2FH71nxGMMgPsMY3V7i8aADS3849DRUXgOHKUbm0qM.jpeg&width=290&height=290&type=image",
      color: ["#F52849", "#2D548B"],
      id: uuidv4(),
      active: true,
    },
    {
      title: "Trafic Tonalité",
      artist: "Marcus Obst",
      audio:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Marcus_Obst/Trafic_Tonalit/Marcus_Obst_-_01_-_Trafic_Tonalit.mp3",
      cover:
        "https://freemusicarchive.org/image?file=images%2Falbums%2FMarcus_Obst_-_Trafic_Tonalit_-_20110301162025913.jpg&width=290&height=290&type=image",
      color: ["#9DB7DA", "#54774D"],
      id: uuidv4(),
      active: false,
    },
    {
      title: "What Circle Where",
      artist: "Macaw",
      audio:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Macaw/Celadon/Macaw_-_02_-_What_Circle_Where.mp3",
      cover:
        "https://freemusicarchive.org/image?file=images%2Falbums%2FMacaw_-_Celadon_-_20110310174432630.jpg&width=290&height=290&type=image",
      color: ["#8BDAE1", "#70B3B1"],
      id: uuidv4(),
      active: false,
    },
    {
      title: "Urban Coyote",
      artist: "Fields Ohio",
      audio:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/HAZE/Fields_Ohio/H_I_N_T_E_R_L_A_N_D/Fields_Ohio_-_06_-_Urban_Coyote.mp3",
      cover:
        "https://freemusicarchive.org/image?file=images%2Falbums%2FFields_Ohio_-_H_I_N_T_E_R_L_A_N_D_-_2015102170051180.jpg&width=290&height=290&type=image",
      color: ["#060928", "#AC6F91"],
      id: uuidv4(),
      active: false,
    },
    {
      title: "DragonGourd/ November Witch",
      artist: "Fields Ohio",
      audio:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Fields_of_Ohio/Woods_Without_Maps/Fields_of_Ohio_-_05_-_DragonGourd_November_Witch.mp3",
      cover:
        "https://freemusicarchive.org/image?file=images%2Falbums%2FFields_of_Ohio_-_Woods_Without_Maps_-_20130529222302217.jpg&width=290&height=290&type=image",
      color: ["#537B59", "#DCD9D0"],
      id: uuidv4(),
      active: false,
    },
    {
      title: "The Thirteenth Hour on Heliopolis",
      artist: "Studio Noir",
      audio:
        "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Studio_Noir/Singsongs_For_You_The_Moon/Studio_Noir_-_01_-_The_Thirteenth_Hour_on_Heliopolis.mp3",
      cover:
        "https://freemusicarchive.org/image?file=images%2Falbums%2FStudio_Noir_-_Singsongs_For_You_The_Moon_-_20150408191044475.jpg&width=290&height=290&type=image",
      color: ["#D76C62", "#BFF7C6"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default data;
