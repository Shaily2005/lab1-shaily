<?php


class User
{
    protected $name;
    protected $surname;
    protected $username;
    protected $is_admin = false;


    public function __construct($name, $surname, $username)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->username = $username;
    }


    public function printFullName()
    {
        $adminTag = $this->is_admin ? " (admin)" : "";
        echo "{$this->name} {$this->surname}{$adminTag}\n";
    }
}


class Customer extends User
{
    private $city;
    private $state;
    private $country;

    public function __construct($name, $surname, $username)
    {
        parent::__construct($name, $surname, $username);
    }


    public function setCity($city)
    {
        $this->city = $city;
    }

    public function setState($state)
    {
        $this->state = $state;
    }

    public function setCountry($country)
    {
        $this->country = $country;
    }

    public function getCity()
    {
        return $this->city;
    }

    public function getState()
    {
        return $this->state;
    }

    public function getCountry()
    {
        return $this->country;
    }


    public function location()
    {
        return "{$this->city}, {$this->state}, {$this->country}";
    }
}


class AdminUser extends User
{

    public function __construct($name, $surname, $username)
    {
        parent::__construct($name, $surname, $username);
        $this->is_admin = true;
    }
}


$user = new User("Arpana", "Kumal<br>", "arpanakumal");
$customer = new Customer("Shaily", "Mukarung<br>", "shailymukarung");
$admin = new AdminUser("Sonu", "Gurung", "sounugurung");


$customer->setCity("Kathmandu");
$customer->setState("KTM");
$customer->setCountry("Nepal");


$user->printFullName();
$customer->printFullName();
$admin->printFullName();

echo "Customer Location: " . $customer->location() . "<br>";
