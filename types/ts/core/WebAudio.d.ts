/// <reference path="../../../global.d.ts" />
/**
 * The audio object of Web Audio API.
 *
 * @class
 * @param {string} url - The url of the audio file.
 */
export default class WebAudio {
    _url: unknown;
    _context: typeof AudioContext;
    _masterGainNode: unknown;
    _masterVolume: unknown;
    _data: unknown;
    _fetchedSize: number;
    _fetchedData: [];
    _buffers: [];
    _sourceNodes: [];
    _gainNode: unknown;
    _pannerNode: unknown;
    _totalTime: number;
    _sampleRate: unknown;
    _loop: unknown;
    _loopStart: unknown;
    _loopLength: unknown;
    _loopStartTime: number;
    _loopLengthTime: unknown;
    _startTime: number;
    _volume: unknown;
    _pitch: unknown;
    _pan: unknown;
    _endTimer: unknown;
    _loadListeners: [];
    _stopListeners: [];
    _lastUpdateTime: unknown;
    _isLoaded: boolean;
    _isError: boolean;
    _isPlaying: boolean;
    _decoder: null;
    static _shouldMuteOnHide: () => boolean;
    constructor(...args: any[]);
    initialize(url: string): void;
    /**
     * Initializes the audio system.
     *
     * @returns {boolean} True if the audio system is available.
     */
    static initialize(): boolean;
    /**
     * Sets the master volume for all audio.
     *
     * @param {number} value - The master volume (0 to 1).
     */
    static setMasterVolume(value: number): void;
    static _createContext(): void;
    static _currentTime(): any;
    static _createMasterGainNode(): void;
    static _setupEventHandlers(): void;
    static _onUserGesture(): void;
    static _onVisibilityChange(): void;
    static _onHide(): void;
    static _onShow(): void;
    static _resetVolume(): void;
    static _fadeIn(duration: number): void;
    static _fadeOut(duration: number): void;
    /**
     * Clears the audio data.
     */
    clear(): void;
    /**
     * The url of the audio file.
     *
     * @readonly
     * @type string
     * @name WebAudio#url
     */
    get url(): unknown;
    /**
     * The volume of the audio.
     *
     * @type number
     * @name WebAudio#volume
     */
    get volume(): number;
    set volume(value: number);
    /**
     * The pitch of the audio.
     *
     * @type number
     * @name WebAudio#pitch
     */
    get pitch(): number;
    set pitch(value: number);
    /**
     * The pan of the audio.
     *
     * @type number
     * @name WebAudio#pan
     */
    get pan(): number;
    set pan(value: number);
    /**
     * Checks whether the audio data is ready to play.
     *
     * @returns {boolean} True if the audio data is ready to play.
     */
    isReady(): boolean;
    /**
     * Checks whether a loading error has occurred.
     *
     * @returns {boolean} True if a loading error has occurred.
     */
    isError(): boolean;
    /**
     * Checks whether the audio is playing.
     *
     * @returns {boolean} True if the audio is playing.
     */
    isPlaying(): boolean;
    /**
     * Plays the audio.
     *
     * @param {boolean} loop - Whether the audio data play in a loop.
     * @param {number} offset - The start position to play in seconds.
     */
    play(loop: boolean, offset: number): void;
    /**
     * Stops the audio.
     */
    stop(): void;
    /**
     * Destroys the audio.
     */
    destroy(): void;
    /**
     * Performs the audio fade-in.
     *
     * @param {number} duration - Fade-in time in seconds.
     */
    fadeIn(duration: number): void;
    /**
     * Performs the audio fade-out.
     *
     * @param {number} duration - Fade-out time in seconds.
     */
    fadeOut(duration: number): void;
    /**
     * Gets the seek position of the audio.
     */
    seek(): number;
    /**
     * Adds a callback function that will be called when the audio data is loaded.
     *
     * @param {function} listner - The callback function.
     */
    addLoadListener(listner: (...args: any) => any): void;
    /**
     * Adds a callback function that will be called when the playback is stopped.
     *
     * @param {function} listner - The callback function.
     */
    addStopListener(listner: (...args: any) => any): void;
    /**
     * Tries to load the audio again.
     */
    retry(): void;
    _startLoading(): void;
    _shouldUseDecoder(): boolean;
    _createDecoder(): void;
    _destroyDecoder(): void;
    _realUrl(): string;
    _startXhrLoading(url: string): void;
    _startFetching(url: string): void;
    _onXhrLoad(xhr: any): void;
    _onFetch(response: any): void;
    _onError(): void;
    _onFetchProcess(value: number): void;
    _updateBufferOnFetch(): void;
    _concatenateFetchedData(): void;
    _updateBuffer(): void;
    _readableBuffer(): any;
    _decodeAudioData(arrayBuffer: any): void;
    _onDecode(buffer: any): void;
    _refreshSourceNode(): void;
    _startPlaying(offset: number): void;
    _startAllSourceNodes(): void;
    _startSourceNode(index: any): void;
    _stopSourceNode(): void;
    _createPannerNode(): void;
    _createGainNode(): void;
    _createAllSourceNodes(): void;
    _createSourceNode(index: any): void;
    _removeNodes(): void;
    _createEndTimer(): void;
    _removeEndTimer(): void;
    _updatePanner(): void;
    _onLoad(): void;
    _readLoopComments(arrayBuffer: any): void;
    _readMetaData(view: any, index: any, size: any): void;
    _readFourCharacters(view: any, index: any): string;
}
