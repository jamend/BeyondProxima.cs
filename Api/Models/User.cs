using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace Api.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string Username { get; set; }
        public string Salt { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public DateTime Created { get; set; }

        [JsonIgnore]
        public virtual ICollection<StarSystem> StarSystems { get; set; }
        [JsonIgnore]
        public virtual ICollection<Fleet> Fleets { get; set; }
    }
}