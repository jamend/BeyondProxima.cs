using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Api.Models
{
    public class StarSystem
    {
        [Key]
        public int Id { get; set; }

        public int? UserId { get; set; }
        public string Name { get; set; }
        public float X { get; set; }
        public float Y { get; set; }

        [ForeignKey("UserId"), JsonIgnore]
        public User User { get; set; }

        [JsonIgnore]
        public virtual ICollection<Planet> Planets { get; set; }
    }
}