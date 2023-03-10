// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.7.0 < 0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import "@openzeppelin/contracts/access/Ownable.sol";

contract Shoaib is ERC20{

    constructor() ERC20("SHO", "Shoaib"){
        _mint(msg.sender, 200000 * 10 ** decimals());
    }
}
