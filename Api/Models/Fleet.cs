using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace Api.Models
{
    public class Fleet
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }
        public int? StarSystemId { get; set; }
        public int? DestinationStarSystemId { get; set; }
        public float X { get; set; }
        public float Y { get; set; }
        public float? NextX { get; set; }
        public float? NextY { get; set; }
        public float? TotalSteps { get; set; }
        public float? CurrentStep { get; set; }

        [ForeignKey("UserId"), JsonIgnore]
        public User User { get; set; }

        [ForeignKey("StarSystemId"), JsonIgnore]
        public StarSystem StarSystem { get; set; }

        [ForeignKey("DestinationStarSystemId"), JsonIgnore]
        public StarSystem DestinationStarSystem { get; set; }
    }
}