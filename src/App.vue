<template>
  <div id="app">
    <div class="nav-mobile sp-only">
      <div @click="() => activeNavMobile('playlist')">
        <font-awesome-icon :icon="['fas', 'list']" />
      </div>
      <div @click="() => activeNavMobile('lyrics')">
        <font-awesome-icon :icon="['fas', 'music']" />
      </div>
    </div>
    <section class="playlist" :class="{ active: activePlaylist }">
      <div class="actions sp-only">
        <button class="close" @click="() => activeNavMobile('playlist')">
          <font-awesome-icon icon="times" />
        </button>
      </div>
      <h3>Now Playing <span> 🎵 </span></h3>
      <perfect-scrollbar class="text" ref="songPlaylist">
        <ul>
          <li
            v-for="(song, key) in songs"
            :key="song.id"
            class="song"
            @click="play(key, true)"
            :class="{ active: song.id === current.id }"
          >
            <div class="cover-playlist">
              <img class="cover" :src="song.cover" />
            </div>
            <div class="details">
              <h2 class="song-title">
                {{ song.title }}
              </h2>
              <p class="artist">{{ song.artist }}</p>
            </div>
            <div class="actions">
              <button
                @click="removeSongFromPlaylist(song)"
                class="delete"
                v-if="removeSongFlg"
              >
                <font-awesome-icon icon="times" />
              </button>
            </div>
          </li>
        </ul>
      </perfect-scrollbar>
    </section>
    <section class="player">
      <div class="cover-wrapper">
        <img v-bind:class="coverObject" :src="current.cover" />
      </div>
      <div class="song-details">
        <h2 class="song-title">
          {{ current.title }}
        </h2>
        <p class="artist">{{ current.artist }}</p>
        <vue-slider
          v-model="seekSlider"
          :tooltip="'active'"
          @change="seekTo"
          :tooltip-formatter="seekSliderFormat"
        ></vue-slider>

        <div class="timer">
          <p class="start">{{ currentlyTimer }}</p>
          <p class="end">
            {{ current.totalTimer }}
          </p>
        </div>

        <div class="volume_container">
          <span class="volume-down">
            <font-awesome-icon icon="volume-down" />
          </span>

          <vue-slider
            v-model="volumeSlider"
            :tooltip="'active'"
            @change="setVolume"
            :style="{ width: '100%' }"
          ></vue-slider>
          <span class="volume-up">
            <font-awesome-icon icon="volume-up" />
          </span>
        </div>
      </div>
      <div class="controls">
        <button class="prev" @click="prev" v-if="songs.length > 1">
          <font-awesome-icon icon="step-backward" />
        </button>
        <button class="play" v-if="!isPlaying" @click="() => play(index)">
          <font-awesome-icon icon="play" />
        </button>
        <button class="pause" v-else @click="pause">
          <font-awesome-icon icon="pause" />
        </button>
        <button class="next" @click="next" v-if="songs.length > 1">
          <font-awesome-icon icon="step-forward" />
        </button>
      </div>
      <div class="footer">
        <div class="loops">
          <p>
            Played
            <span class="text-primary">{{ countLoops }}</span>
            times
          </p>
          <p>
            <label>Loop for</label>
            <input class="loops-input" v-model="loops" type="number" />
            <span>times</span>
          </p>
        </div>
        <div>
          <button class="btn-reset" @click="() => setLoopsCount(0)">
            Reset
          </button>
        </div>
      </div>
      <div class="footer">
        <div class="play-form-to">
          <label>Play from </label>
          <multiselect
            class="select"
            v-model="playFrom"
            :options="songIndexOptions"
            :searchable="false"
            :show-labels="false"
            :disabled="setPlayFromToFlg"
            placeholder=""
          ></multiselect>
          <label>to </label>
          <multiselect
            class="select"
            v-model="playTo"
            :options="songIndexOptions"
            :searchable="false"
            :show-labels="false"
            :disabled="setPlayFromToFlg"
            placeholder=""
          ></multiselect>
        </div>
        <div>
          <button
            class="btn-reset"
            @click="setPlayFromToFlg = !setPlayFromToFlg"
          >
            {{ setPlayFromToFlg ? "Cancel" : "Set" }}
          </button>
        </div>
      </div>
    </section>

    <section class="lyrics" :class="{ active: activeLyrics }">
      <div class="actions sp-only">
        <button class="close" @click="() => activeNavMobile()">
          <font-awesome-icon icon="times" />
        </button>
      </div>
      <multiselect
        class="select-lyric-type"
        v-model="selectedLyricType"
        :options="lyricTypesOptions"
        :allow-empty="false"
        :searchable="false"
        label="name"
        track-by="id"
        :show-labels="false"
      ></multiselect>
      <h3>Lyrics</h3>
      <perfect-scrollbar class="text">
        <p
          v-html="lyric.text"
          v-for="(lyric, index) in convertLyric"
          :key="index"
          :class="{
            active: lyric === currentLyric,
            'first-letter': selectedLyricType.id === 'lyric1'
          }"
          @click="() => setCurrentlyTimer(lyric.start || 0)"
        ></p>
      </perfect-scrollbar>
    </section>
  </div>
</template>

<script>
import { formatTimer, timeStringToSecond } from "./helpers/timer";
import { deleteElement, threatSongs } from "./helpers/utils";
import songs from "./mocks/songs";

export default {
  name: "App",
  data() {
    return {
      loops: 1,
      countLoops: 0,
      playFrom: null,
      playTo: null,
      current: {},
      coverObject: { cover: true, animated: false },
      index: 0,
      isPlaying: false,
      currentlyTimer: "00:00",
      songs: songs,
      player: new Audio(),
      seekSlider: 0,
      seekSliderFormat: v => `${formatTimer(this.current.seconds * (v / 100))}`,
      volumeSlider: 100,
      activePlaylist: false,
      activeLyrics: false,
      currentLyric: "",
      lyricTypesOptions: [
        { id: "lyric1", name: "Lyric 1" },
        { id: "lyric2", name: "Lyric 2" }
      ],
      selectedLyricType: { id: "lyric1", name: "Lyric 1" },
      removeSongFlg: false,
      setPlayFromToFlg: false
    };
  },
  methods: {
    setCover() {
      this.coverObject.animated = true;

      setTimeout(() => {
        this.coverObject.animated = false;
      }, 1000);
    },
    setCurrentSong() {
      this.current = this.songs[this.index];
      this.player.src = this.current.src;
      this.setCover();
    },
    setCurrentlyTimer(time) {
      if (!time) {
        return false;
      }
      this.player.currentTime = time + 0.1;
    },
    play(index, isClickFromList = false) {
      if (isClickFromList && index === this.index && this.isPlaying) {
        return true;
      }

      if (this.index !== index) {
        this.setLoopsCount(0);
      }
      this.index = index;
      this.setCurrentSong();
      this.scrollToActive();

      setTimeout(() => {
        this.player.play();
        this.isPlaying = true;
      }, 500);
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      let newIndex = (this.index + 1) % this.songs.length;
      this.play(this.handlePlayFromTo(newIndex));
    },
    prev() {
      let newIndex = (this.index - 1 + this.songs.length) % this.songs.length;
      this.play(this.handlePlayFromTo(newIndex));
    },
    removeSongFromPlaylist(song) {
      if (this.songs.length > 1) {
        if (this.index > 0) {
          this.index--;
        }
        this.songs = deleteElement(this.songs, song);
        this.setCurrentSong();
      }
    },
    setLoopsCount($count) {
      this.countLoops = $count;
    },
    registerListener() {
      this.player.addEventListener("timeupdate", () => {
        let playerTimer = this.player.currentTime;

        this.currentLyric = this.convertLyric.find(
          el => playerTimer >= el.start && playerTimer <= el.end
        );
        this.currentlyTimer = formatTimer(playerTimer);
        let percent = Math.round((playerTimer * 100) / this.current.seconds);
        this.seekSlider = percent > 100 ? 100 : percent;
      });
      this.player.addEventListener("ended", () => {
        this.setLoopsCount(++this.countLoops);
        if (this.countLoops >= this.loops) {
          this.next();
        }
        this.isPlaying = false;
        this.play(this.index);
      });
    },
    seekTo() {
      this.player.currentTime = this.current.seconds * (this.seekSlider / 100);
    },
    setVolume() {
      this.player.volume = this.volumeSlider / 100;
    },
    activeNavMobile(type = null) {
      switch (type) {
        case "playlist":
          this.activeLyrics = false;
          this.activePlaylist = !this.activePlaylist;
          break;
        case "lyrics":
          this.activeLyrics = !this.activeLyrics;
          this.activePlaylist = false;
          break;
        default:
          this.activeLyrics = false;
          this.activePlaylist = false;
      }
    },
    scrollToActive() {
      setTimeout(() => {
        const list = this.$refs.songPlaylist;
        const active = list.$el.querySelector(".active");
        const listRect = list.$el.getBoundingClientRect();
        const activeRect = active.getBoundingClientRect();
        if (
          activeRect.top < listRect.top ||
          activeRect.bottom > listRect.bottom - 100
        ) {
          list.$el.scrollTo({
            top: active.offsetTop - 150
          });
        }
      });
    },
    getSettingFromLocalStorage() {
      let attribute = [
        "volumeSlider",
        "loops",
        "countLoops",
        "playFrom",
        "playTo"
      ];
      attribute.forEach(el => {
        if (localStorage[el]) {
          this[el] = localStorage[el];
        }
      });

      if (localStorage.index) {
        this.index =
          localStorage.index > this.songs.length - 1 ? 0 : localStorage.index;
      }
      if (localStorage.playFrom) {
        this.playFrom =
          localStorage.playFrom === "null" ? null : localStorage.playFrom;
      }
      if (localStorage.playTo) {
        this.playTo =
          localStorage.playTo === "null" ? null : localStorage.playTo;
      }
    },
    handlePlayFromTo(index) {
      if (!this.setPlayFromToFlg) {
        return index;
      }
      if (!this.playFrom && !this.playTo) {
        return index;
      }

      if (index === this.songs.length - 1) {
        return this.playTo - 1;
      }
      if (index === 0) {
        return this.playFrom - 1;
      }
      let from = Number(this.playFrom ? this.playFrom : 0);
      let to = Number(this.playTo ? this.playTo : this.songs.length - 1);
      const range = to - from + 1;
      const normalizedIndex = (index - from + 1) % range;
      index = from + normalizedIndex - 1;
      return index;
    }
  },
  mounted() {
    this.songs = threatSongs(this.songs);
    this.getSettingFromLocalStorage();
    this.setCurrentSong();
    this.scrollToActive();

    this.registerListener();
  },
  computed: {
    convertLyric() {
      if (typeof this.current[this.selectedLyricType.id] === "undefined") {
        return [];
      }
      const result = [];
      const split = this.current[this.selectedLyricType.id].split(/\n\s*\n/);
      for (let i = 0; i < split.length; i++) {
        let subtitle = split[i];

        const [idLine, timeLine, ...textLines] = subtitle.split("\n");
        const id = parseInt(idLine.trim());
        // type sub has no time
        if (isNaN(id)) {
          return [idLine, timeLine, ...textLines].map((subtitle, id) => ({
            id,
            text: subtitle
          }));
        }

        // type sub has time
        const timeString = timeLine.trim();
        const text = textLines.join("\n").trim();
        const [start, end] = timeLine
          .trim()
          .split("-->")
          .map(timeStringToSecond);
        result.push({ id, timeString, text, start, end });
      }
      return result;
    },
    songIndexOptions() {
      return [...Array(this.songs.length).keys()].map(el => el + 1);
    }
  },
  watch: {
    volumeSlider(value) {
      localStorage.volumeSlider = value;
    },
    loops(value) {
      localStorage.loops = value;
    },
    countLoops(value) {
      localStorage.countLoops = value;
    },
    index(value) {
      localStorage.index = value;
    },
    playFrom(value) {
      localStorage.playFrom = value;
    },
    playTo(value) {
      localStorage.playTo = value;
    }
  }
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
