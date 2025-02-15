import * as webdriver from './index';
import * as remote from './remote';

/**
 * IEDriverServer logging levels.
 */
export type Level = 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE';

/**
 * A WebDriver client for Microsoft's Internet Explorer.
 */
export class Driver extends webdriver.WebDriver {
    /**
     * Creates a new session for Microsoft's Internet Explorer.
     *
     * @param {(Capabilities|Options)=} options The configuration options.
     * @param {(remote.DriverService)=} opt_service The `DriverService` to use
     *   to start the IEDriverServer in a child process, optionally.
     * @return {!Driver} A new driver instance.
     */
    static createSession(
        options?: webdriver.Capabilities | Options,
        opt_service?: remote.DriverService,
    ): Driver;

    /**
     * This function is a no-op as file detectors are not supported by this
     * implementation.
     * @override
     */
    setFileDetector(): void;
}

/**
 * Class for managing IEDriver specific options.
 */
export class Options extends webdriver.Capabilities {
    constructor();

    /**
     * Whether to disable the protected mode settings check when the session is
     * created. Disbling this setting may lead to significant instability as the
     * browser may become unresponsive/hang. Only 'best effort' support is
     * provided when using this capability.
     *
     * For more information, refer to the IEDriver's
     * [required system configuration](http://goo.gl/eH0Yi3).
     *
     * @param {boolean} ignoreSettings Whether to ignore protected mode settings.
     * @return {!Options} A self reference.
     */
    introduceFlakinessByIgnoringProtectedModeSettings(ignoreSettings: boolean): Options;

    /**
     * Indicates whether to skip the check that the browser's zoom level is set to
     * 100%.
     *
     * @param {boolean} ignore Whether to ignore the browser's zoom level
     *     settings.
     * @return {!Options} A self reference.
     */
    ignoreZoomSetting(ignore: boolean): Options;

    /**
     * Sets the initial URL loaded when IE starts. This is intended to be used
     * with
     * {@link #ignoreProtectedModeSettings} to allow the user to initialize IE in
     * the proper Protected Mode zone. Setting this option may cause browser
     * instability or flaky and unresponsive code. Only 'best effort' support is
     * provided when using this option.
     *
     * @param {string} url The initial browser URL.
     * @return {!Options} A self reference.
     */
    initialBrowserUrl(url: string): Options;

    /**
     * Configures whether to enable persistent mouse hovering (true by default).
     * Persistent hovering is achieved by continuously firing mouse over events at
     * the last location the mouse cursor has been moved to.
     *
     * @param {boolean} enable Whether to enable persistent hovering.
     * @return {!Options} A self reference.
     */
    enablePersistentHover(enable: boolean): Options;

    /**
     * Configures whether the driver should attempt to remove obsolete
     * {@linkplain webdriver.WebElement WebElements} from its internal cache on
     * page navigation (true by default). Disabling this option will cause the
     * driver to run with a larger memory footprint.
     *
     * @param {boolean} enable Whether to enable element reference cleanup.
     * @return {!Options} A self reference.
     */
    enableElementCacheCleanup(enable: boolean): Options;

    /**
     * Configures whether to require the IE window to have input focus before
     * performing any user interactions (i.e. mouse or keyboard events). This
     * option is disabled by default, but delivers much more accurate interaction
     * events when enabled.
     *
     * @param {boolean} require Whether to require window focus.
     * @return {!Options} A self reference.
     */
    requireWindowFocus(require: boolean): Options;

    /**
     * Configures the timeout, in milliseconds, that the driver will attempt to
     * located and attach to a newly opened instance of Internet Explorer. The
     * default is zero, which indicates waiting indefinitely.
     *
     * @param {number} timeout How long to wait for IE.
     * @return {!Options} A self reference.
     */
    browserAttachTimeout(timeout: number): Options;

    /**
     * Configures whether to launch Internet Explorer using the CreateProcess API.
     * If this option is not specified, IE is launched using IELaunchURL, if
     * available. For IE 8 and above, this option requires the TabProcGrowth
     * registry value to be set to 0.
     *
     * @param {boolean} force Whether to use the CreateProcess API.
     * @return {!Options} A self reference.
     */
    forceCreateProcessApi(force: boolean): Options;

    /**
     * Specifies command-line switches to use when launching Internet Explorer.
     * This is only valid when used with {@link #forceCreateProcessApi}.
     *
     * @param {...(string|!Array.<string>)} var_args The arguments to add.
     * @return {!Options} A self reference.
     */
    addArguments(...var_args: string[]): Options;

    /**
     * Configures whether proxies should be configured on a per-process basis. If
     * not set, setting a {@linkplain #setProxy proxy} will configure the system
     * proxy. The default behavior is to use the system proxy.
     *
     * @param {boolean} enable Whether to enable per-process proxy settings.
     * @return {!Options} A self reference.
     */
    usePerProcessProxy(enable: boolean): Options;

    /**
     * Configures whether to clear the cache, cookies, history, and saved form
     * data before starting the browser. _Using this capability will clear session
     * data for all running instances of Internet Explorer, including those
     * started manually._
     *
     * @param {boolean} cleanSession Whether to clear all session data on startup.
     * @return {!Options} A self reference.
     */
    ensureCleanSession(cleanSession: boolean): Options;

    /**
     * Sets the path to the log file the driver should log to.
     * @param {string} file The log file path.
     * @return {!Options} A self reference.
     */
    setLogFile(file: string): Options;

    /**
     * Sets the IEDriverServer's logging {@linkplain Level level}.
     * @param {Level} level The logging level.
     * @return {!Options} A self reference.
     */
    setLogLevel(level: Level): Options;

    /**
     * Sets the IP address of the driver's host adapter.
     * @param {string} host The IP address to use.
     * @return {!Options} A self reference.
     */
    setHost(host: string): Options;

    /**
     * Sets the path of the temporary data directory to use.
     * @param {string} path The log file path.
     * @return {!Options} A self reference.
     */
    setExtractPath(path: string): Options;

    /**
     * Sets whether the driver should start in silent mode.
     * @param {boolean} silent Whether to run in silent mode.
     * @return {!Options} A self reference.
     */
    silent(silent: boolean): Options;

    /**
     * Sets the proxy settings for the new session.
     * @param {capabilities.ProxyConfig} proxy The proxy configuration to use.
     * @return {!Options} A self reference.
     */
    setProxy(proxy: webdriver.ProxyConfig): Options;

    /**
     * Sets the IEDriver to drive Chromium-based Edge in Internet Explorer mode.
     * @param {boolean} attachEdgeChromium Whether to run in Chromium-based-Edge in IE mode
     * @return {!Options} A self reference.
     */
    setEdgeChromium(attachEdgeChromium: boolean): Options;

    /**
     * Sets the path of the EdgeChromium driver.
     * @param {string} path The EdgeChromium driver path
     * @return {!Options} A self reference.
     */
    setEdgePath(path: string): Options;
}

/**
 * Creates {@link selenium-webdriver/remote.DriverService} instances that manage
 * an [IEDriverServer](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver)
 * server in a child process.
 */
export class ServiceBuilder extends remote.DriverService.Builder {
    /**
     * @param {string=} opt_exe Path to the server executable to use. If omitted,
     *     the builder will attempt to locate the IEDriverServer on the system PATH.
     */
    constructor(opt_exe?: string);
}
