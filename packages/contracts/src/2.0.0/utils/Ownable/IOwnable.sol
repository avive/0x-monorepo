pragma solidity 0.4.24;

/*
 * Ownable
 *
 * Base contract with an owner.
 * Provides onlyOwner modifier, which prevents function from running if it is called by anyone other than the owner.
 */

contract IOwnable {
    function transferOwnership(address newOwner)
        public;
}
