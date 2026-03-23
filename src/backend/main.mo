import Time "mo:core/Time";
import Int "mo:core/Int";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Map "mo:core/Map";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByTimestamp(cs1 : ContactSubmission, cs2 : ContactSubmission) : Order.Order {
      Int.compare(cs1.timestamp, cs2.timestamp);
    };
  };

  type Service = {
    title : Text;
    description : Text;
    iconName : Text;
  };

  type CompanyStats = {
    yearsOfExperience : Nat;
    clientsServed : Nat;
    satisfactionRate : Nat;
  };

  let contactSubmissions = Map.empty<Time.Time, ContactSubmission>();

  let services = [
    {
      title = "Web Development";
      description = "Building modern, responsive websites.";
      iconName = "web";
    },
    {
      title = "App Development";
      description = "Creating user-friendly mobile applications.";
      iconName = "app";
    },
  ];

  let companyStats : CompanyStats = {
    yearsOfExperience = 10;
    clientsServed = 200;
    satisfactionRate = 95;
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp;
    };
    contactSubmissions.add(timestamp, submission);
  };

  public query ({ caller }) func getServices() : async [Service] {
    services;
  };

  public query ({ caller }) func getCompanyStats() : async CompanyStats {
    companyStats;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort(ContactSubmission.compareByTimestamp);
  };
};
