/**
 * This class handles the keyboard events. It knows the last known state of its 
 * keys
 * 
 * Some parts of this class are pretty complex, but the class itself is fairly 
 * easy to use. You just instantiate one object in your game and us the method
 * `isKeyDown()` to check if a specific key is currently pressed down by the 
 * user.
 * 
 * @author BugSlayer
 */
class KeyListener
{
    
    // Array that holds the state of all keys
    private keyCodeStates : boolean[];

    /**
     * Constructs a new KeyListener.
     */
    constructor() {
        this.keyCodeStates = new Array<boolean>();
        // Register the arrow methods as listeners to keyevents
        // There is a third event ('keypress'), but we do not need to use it
        window.addEventListener("keydown", this.keyDown);
        window.addEventListener("keyup", this.keyUp);
    }

    /**
     * Returns `true` if and only if the last known state of the keyboard
     * reflects that the specified key is currently pressed.
     * 
     * @param {number} keyCode the keyCode to check
     * @returns {boolean} `true` when the specified key is currently down
     */
    public isKeyDown(keyCode: number) : boolean
    {
        return this.keyCodeStates[keyCode] == true;
    }

    /**
     * @internal Arrow method that catches keydown events
     * WARNING: DO NOT USE OR REMOVE THIS METHOD
     */
    private keyDown = (ev: KeyboardEvent) => {
        this.keyCodeStates[ev.keyCode] = true;
    }

    /**
     * @internal Arrow method that catches keyup events
     * WARNING: DO NOT USE OR REMOVE THIS METHOD
     */
    private keyUp = (ev: KeyboardEvent) => {
        this.keyCodeStates[ev.keyCode] = false;
    }

}