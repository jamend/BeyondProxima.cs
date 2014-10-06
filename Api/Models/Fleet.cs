using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Models
{
    public class Fleet
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }
        public int StarSystemId { get; set; }
        public int DestinationStarSystemId { get; set; }
        public float X { get; set; }
        public float Y { get; set; }
        public float DestinationX { get; set; }
        public float DestinationY { get; set; }
        public float TotalSteps { get; set; }
        public float CurrentStep { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }

        [ForeignKey("StarSystemId")]
        public StarSystem StarSystem { get; set; }

        [ForeignKey("DestinationStarSystemId")]
        public StarSystem DestinationStarSystem { get; set; }
    }
}