<?php


interface HasInfo
{
    public function getInfo();
}


class Address implements HasInfo
{
    private $street;
    private $number;
    private $city;


    public function __construct($street, $number, $city)
    {
        $this->street = $street;
        $this->number = $number;
        $this->city = $city;
    }


    public function getInfo()
    {
        return "Address: street {$this->street}, number {$this->number}, city {$this->city}";
    }
}


class Phone implements HasInfo
{
    private $prefix;
    private $number;


    public function __construct($prefix, $number)
    {
        $this->prefix = $prefix;
        $this->number = $number;
    }


    public function getInfo()
    {
        return "Number: {$this->prefix} / {$this->number}";
    }
}

class User implements HasInfo
{
    private $firstName;
    private $lastName;
    private $address;
    private $phone;


    public function __construct($firstName, $lastName, Address $address, Phone $phone)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->address = $address;
        $this->phone = $phone;
    }


    public function getInfo()
    {
        return "User: {$this->firstName} {$this->lastName} " .
            $this->address->getInfo() . " " .
            $this->phone->getInfo();
    }
}


$address = new Address("lambagar", 123, "Kathmandu <br>" );
$phone = new Phone("+977", "9845677865");
$user = new User("Arpana", "Kumal<br>", $address, $phone);


echo $user->getInfo();
