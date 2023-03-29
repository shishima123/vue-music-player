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
      <perfect-scrollbar class="text">
        <ul>
          <li
            v-for="song in songs"
            :key="song.id"
            class="song"
            @click="play(song)"
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
              <button @click="removeSongFromPlaylist(song)" class="delete">
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
        <button class="play" v-if="!isPlaying" @click="play">
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
    </section>

    <section class="lyrics" :class="{ active: activeLyrics }">
      <div class="actions sp-only">
        <button class="close" @click="() => activeNavMobile()">
          <font-awesome-icon icon="times" />
        </button>
      </div>
      <h3>Lyrics</h3>
      <perfect-scrollbar class="text">
        <p v-for="(lyric, index) in convertLyric" :key="index">
          {{ lyric }}
        </p>
      </perfect-scrollbar>
    </section>
  </div>
</template>

<script>
import { formatTimer } from "./helpers/timer";
import { deleteElement, threatSongs } from "./helpers/utils";
import songs from "./mocks/songs";

export default {
  name: "App",
  data() {
    return {
      loops: 10,
      countLoops: 0,
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
      activeLyrics: false
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
      this.setCover();
    },
    play(song) {
      if (song === this.current && this.isPlaying) {
        return true;
      }
      if (typeof song.src !== "undefined") {
        this.current.isPlaying = false;
        this.index = this.songs.indexOf(this.current);
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;

      this.setCover();
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.setCurrentSong();
      this.setLoopsCount(0);
      this.play(this.current);
    },
    prev() {
      this.current.isPlaying = false;
      this.index = this.songs.indexOf(this.current);
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.setCurrentSong();
      this.setLoopsCount(0);
      this.play(this.current);
    },
    removeSongFromPlaylist(song) {
      if (this.songs.length > 1) {
        if (this.index > 0) {
          this.index--;
        }
        this.current.isPlaying = false;
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

        this.currentlyTimer = formatTimer(playerTimer);
        let percent = Math.round((playerTimer * 100) / this.current.seconds);
        this.seekSlider = percent > 100 ? 100 : percent;
        this.current.isPlaying = true;
      });
      this.player.addEventListener("ended", () => {
        this.setLoopsCount(++this.countLoops);
        if (this.countLoops >= this.loops) {
          setTimeout(() => {
            this.next();
          }, 500);
        }
        this.isPlaying = false;
        this.play(this.current);
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
    }
  },
  mounted() {
    this.songs = threatSongs(this.songs);
    this.setCurrentSong();
    this.player.src = this.current.src;
    this.registerListener();
  },
  computed: {
    convertLyric() {
      return this.current.lyric ? this.current.lyric.split("\n") : "";
    }
  }
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
