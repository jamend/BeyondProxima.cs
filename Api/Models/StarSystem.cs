using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

        [ForeignKey("UserId")]
        public User User { get; set; }

        public virtual ICollection<Planet> Planets { get; set; }
    }
}